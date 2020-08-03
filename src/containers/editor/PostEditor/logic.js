import { map, contains, repeat, isEmpty, slice, trim } from 'ramda'
import { useEffect } from 'react'

import { EVENT, ERR, THREAD } from '@/constant'
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
} from '@/utils'

import { S, updatablePostFields } from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:PostEditor')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71()

let store = null
let sub$ = null
let saveDraftTimmer = null

export const changeView = (curView) => store.mark({ curView })

const getDigest = (body) => {
  /* eslint-disable no-undef */
  const digestContainer = document.getElementById(store.contentDomId)

  /* eslint-enable no-undef */
  const innerImagesLength = extractAttachments(body).length
  let digest = slice(0, 65, trim(digestContainer.innerText))

  if (innerImagesLength > 0 && innerImagesLength <= 2) {
    const imgDigest = `${repeat('[图片]', innerImagesLength)}`
    digest = isEmpty(digest) ? imgDigest : `${digest}..${imgDigest}`
  } else if (innerImagesLength > 2) {
    const imgDigest = `${repeat('[图片]', 2)} x ${innerImagesLength}`
    digest = isEmpty(digest) ? imgDigest : `${digest}..${imgDigest}`
  }

  return digest
}

export const onRadarNoteCLose = () => store.mark({ showRadarNote: false })
const supportedRadarSource = ['wanqu', 'solidot', 'techcrunch']
const specCheck = () => {
  if (store.activeThread === THREAD.RADAR) {
    const domain = parseDomain(store.editPost.linkAddr)
    if (!contains(domain, supportedRadarSource)) {
      store.mark({ showRadarNote: true })
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
    mentionUsers: map((user) => ({ id: user.id }), store.referUsersData),
  }
  if (!isEmpty(store.labelsData.tags)) {
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

export const cancelPublish = () => {
  cancelLoading()
  // store.reset()
  closePreviewer()
}

export const onUploadImageDone = (url) =>
  send(EVENT.DRAFT_INSERT_SNIPPET, { data: `![](${url})` })

export const insertCode = () => {
  const communityRaw = store.curCommunity.raw
  const data = `\`\`\`${communityRaw}\n\n\`\`\``

  send(EVENT.DRAFT_INSERT_SNIPPET, { data })
}

export const onMentionSearch = (name) => {
  if (name?.length >= 2) {
    sr71$.query(S.searchUsers, { name })
  } else {
    store.mark({ mentionList: [] })
  }
}

export const onMention = (user) => store.addReferUser(user)

const openAttachment = (att) => {
  if (!att) return false
  // const { type } = att
  // if (type === TYPE.PREVIEW_POST_EDIT) loadPost(att.id)
  store.updateEditing(att)
  store.mark({ isEdit: true })
}

const doneCleanUp = () => {
  closePreviewer()
  store.reset()
  cancelLoading()
}

export const inputOnChange = (part, e) => updateEditing(store, part, e)
export const bodyInputOnChange = (content) => {
  // draft.js will mis trigger onChange event with empty string.
  // currently this is a bug: in edit can't update to empty.
  if (!store) return false
  if (store.isEdit && content === '') return false
  store.mark({ extractMentions: extractMentions(content) })

  updateEditing(store, 'body', content)
}

const saveDraftIfNeed = (content) => {
  if (isEmpty(content)) return false
  const curDraftContent = BStore.get('recentDraft')

  if (curDraftContent !== content) BStore.set('recentDraft', content)
}

const clearDraft = () => BStore.set('recentDraft', '')

const publishing = (maybe = true) => store.mark({ publishing: maybe })
const cancelLoading = () => store.mark({ publishing: false })

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
    action: () => cancelLoading(),
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      cancelLoading()
      errRescue({ type: ERR.TIMEOUT, details, path: 'PostEditor' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      cancelLoading()
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
    3000,
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

      store.mark({ editPost: {}, isEdit: false })
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store, attachment])
}
