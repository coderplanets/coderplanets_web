import R from 'ramda'

import {
  asyncRes,
  asyncErr,
  $solver,
  makeDebugger,
  dispatchEvent,
  EVENT,
  ERR,
  THREAD,
  countWords,
  extractAttachments,
  extractMentions,
  updateEditing,
  closePreviewer,
  cast,
  parseDomain,
  errRescue,
} from 'utils'

import SR71 from 'utils/async/sr71'
import { S, updatablePostFields } from './schema'
// import testMentions from './test_mentions'

const sr71$ = new SR71()

/* eslint-disable-next-line */
const debug = makeDebugger('L:PostEditor')

let store = null
let sub$ = null

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
  dispatchEvent(EVENT.DRAFT_INSERT_SNIPPET, { data: `![](${url})` })

export const insertCode = () => {
  const communityRaw = store.curCommunity.raw
  const data = `\`\`\`${communityRaw}\n\n\`\`\``

  dispatchEvent(EVENT.DRAFT_INSERT_SNIPPET, { data })
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
  if (store.activeThread === THREAD.RADAR) {
    store.updateEditing({ copyRight: 'reprint' })
  }

  if (!att) return false
  // const { id, title, body, digest } = att

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
  store.markState({ extractMentions: extractMentions(content) })

  // extractMentions: extractMentions(content)
  updateEditing(store, 'body', content)
}

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
      dispatchEvent(EVENT.REFRESH_POSTS)
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
      dispatchEvent(EVENT.REFRESH_POSTS)
    },
  },
  {
    match: asyncRes('searchUsers'),
    action: ({ searchUsers: { entries } }) => {
      debug('searchUsers done--: ', entries)
      store.updateMentionList(entries)
    },
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

export const init = (_store, attachment) => {
  // if (store) return openAttachment(attachment)
  store = _store

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  openAttachment(attachment)
}

export const uninit = () => {
  if (store.publishing || !sub$) return false
  debug('===== do uninit')
  store.markState({ editPost: {} })
  sr71$.stop()
  sub$.unsubscribe()
  sub$ = null
  /*
     store.toast('info', {
     title: 'todo',
     msg: '草稿已保存',
     })
   */
  // cancleMutate()
}
