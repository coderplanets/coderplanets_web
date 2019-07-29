import R from 'ramda'
import { useEffect } from 'react'

import { EVENT, ERR, THREAD } from '@constant'
import {
  asyncSuit,
  buildLog,
  send,
  countWords,
  extractAttachments,
  extractMentions,
  updateEditing,
  closePreviewer,
  cast,
  parseDomain,
  errRescue,
  BStore,
} from '@utils'

import { S, updatablePostFields } from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:PostEditor')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71()

let store = null
let sub$ = null
let saveDraftTimmer = null

export const changeView = curView => store.markState({ curView })

const getDigest = body => {
  /* eslint-disable no-undef */
  const digestContainer = document.getElementById(store.contentDomId)

  /* eslint-enable no-undef */
  const innerImagesLength = extractAttachments(body).length
  let digest = R.slice(0, 65, R.trim(digestContainer.innerText))

  if (innerImagesLength > 0 && innerImagesLength <= 2) {
    const imgDigest = `${R.repeat('[图片]', innerImagesLength)}`
    digest = R.isEmpty(digest) ? imgDigest : `${digest}..${imgDigest}`
  } else if (innerImagesLength > 2) {
    const imgDigest = `${R.repeat('[图片]', 2)} x ${innerImagesLength}`
    digest = R.isEmpty(digest) ? imgDigest : `${digest}..${imgDigest}`
  }

  return digest
}

export const onRadarNoteCLose = () => store.markState({ showRadarNote: false })
const supportedRadarSource = ['wanqu', 'solidot', 'techcrunch']
const specCheck = () => {
  if (store.activeThread === THREAD.RADAR) {
    const domain = parseDomain(store.editPost.linkAddr)
    if (!R.contains(domain, supportedRadarSource)) {
      store.markState({ showRadarNote: true })
      return false
    }
  }
  return true
}

export const onPublish = () => {
  if (!store.validator('general')) return false
  if (!specCheck()) return false

  const { subPath: topic } = store.curRoute
  const { body } = store.editData
  const { isEdit } = store
  publishing()

  const digest = getDigest(body)
  const length = countWords(body)

  const variables = {
    ...store.editData,
    communityId: store.viewing.community.id,
    digest,
    length,
    topic,
    mentionUsers: R.map(user => ({ id: user.id }), store.referUsersData),
  }
  if (!R.isEmpty(store.labelsData.tags)) {
    variables.tags = store.labelsData.tags
  }

  log('onPublish labelsData: ', store.labelsData.tags)
  log('onPublish variables: ', variables)

  if (isEdit) {
    const args = cast(updatablePostFields, variables)
    return sr71$.mutate(S.updatePost, args)
  }
  sr71$.mutate(S.createPost, variables)
}

export const canclePublish = () => {
  cancleLoading()
  // store.reset()
  closePreviewer()
}

export const onUploadImageDone = url =>
  send(EVENT.DRAFT_INSERT_SNIPPET, { data: `![](${url})` })

export const insertCode = () => {
  const communityRaw = store.curCommunity.raw
  const data = `\`\`\`${communityRaw}\n\n\`\`\``

  send(EVENT.DRAFT_INSERT_SNIPPET, { data })
}

export const onMentionSearch = name => {
  if (name && name.length >= 2) {
    sr71$.query(S.searchUsers, { name })
  } else {
    store.markState({ mentionList: [] })
  }
}

export const onMention = user => store.addReferUser(user)

const openAttachment = att => {
  if (!att) return false
  // const { type } = att
  // if (type === TYPE.PREVIEW_POST_EDIT) loadPost(att.id)
  /* log('openAttachment att: ', att) */
  store.updateEditing(att)
  store.markState({ isEdit: true })
}

const doneCleanUp = () => {
  closePreviewer()
  store.reset()
  cancleLoading()
}

export const inputOnChange = (part, e) => updateEditing(store, part, e)
export const bodyInputOnChange = content => {
  // draft.js will mis trigger onChange event with empty string.
  // currently this is a bug: in edit can't update to empty.
  if (!store) return false
  if (store.isEdit && content === '') return false
  store.markState({ extractMentions: extractMentions(content) })

  updateEditing(store, 'body', content)
}

const saveDraftIfNeed = content => {
  if (R.isEmpty(content)) return false
  const curDraftContent = BStore.get('recentDraft')

  if (curDraftContent !== content) BStore.set('recentDraft', content)
}

const clearDraft = () => BStore.set('recentDraft', '')

const publishing = (maybe = true) => store.markState({ publishing: maybe })
const cancleLoading = () => store.markState({ publishing: false })

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('createPost'),
    action: () => {
      store.toast('success', {
        title: '帖子已发布',
        msg: 'have a good day :)',
        position: 'topCenter',
      })

      doneCleanUp()
      clearDraft()
      send(EVENT.REFRESH_POSTS)
    },
  },
  {
    match: asyncRes('updatePost'),
    action: () => {
      store.toast('success', {
        title: '已更新',
        msg: '.',
        position: 'topCenter',
      })

      doneCleanUp()
      send(EVENT.REFRESH_POSTS)
    },
  },
  {
    match: asyncRes('searchUsers'),
    action: ({ searchUsers: { entries } }) => store.updateMentionList(entries),
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => cancleLoading(),
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      cancleLoading()
      errRescue({ type: ERR.TIMEOUT, details, path: 'PostEditor' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      cancleLoading()
      errRescue({ type: ERR.NETWORK, path: 'PostEditor' })
    },
  },
]

const initDraftTimmer = () => {
  // only save draft in create mode
  if (store.isEdit) return false
  if (saveDraftTimmer) clearInterval(saveDraftTimmer)

  saveDraftTimmer = setInterval(
    () => saveDraftIfNeed(store.editPost.body),
    3000
  )
}

// ###############################
// init & uninit
// ###############################
export const useInit = (_store, attachment) => {
  useEffect(() => {
    // log('effect init')
    store = _store
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    openAttachment(attachment)
    initDraftTimmer()

    return () => {
      // log('effect uninit')
      if (saveDraftTimmer) clearInterval(saveDraftTimmer)

      store.markState({ editPost: {}, isEdit: false })
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store, attachment])
}
