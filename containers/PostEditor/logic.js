import R from 'ramda'

import {
  asyncRes,
  asyncErr,
  $solver,
  makeDebugger,
  dispatchEvent,
  EVENT,
  ERR,
  meteorState,
  countWords,
  extractAttachments,
  extractMentions,
  updateEditing,
  errorForHuman,
  closePreviewer,
  cast,
} from '../../utils'

import { S, updatablePostFields } from './schema'
import SR71 from '../../utils/network/sr71'
// import testMentions from './test_mentions'

const sr71$ = new SR71()

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:PostEditor')
/* eslint-enable no-unused-vars */

let store = null
let sub$ = null

export const changeView = curView => store.markState({ curView })

const getDigest = body => {
  /* eslint-disable no-undef */
  const digestContainer = document.getElementById(
    'article-editor-preview-container'
  )
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

export const onPublish = () => {
  if (!store.validator('general')) return false
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
  sr71$.mutate(S.updatePost, variables)
}

export const canclePublish = () => {
  cancleLoading()
  // store.reset()
  closePreviewer()
}

export const onUploadImageDone = url =>
  dispatchEvent(EVENT.DRAFT_INSERT_SNIPPET, { data: `![](${url})` })

export function insertCode() {
  const communityRaw = store.curCommunity.raw
  const data = `\`\`\`${communityRaw}\n\n\`\`\``

  dispatchEvent(EVENT.DRAFT_INSERT_SNIPPET, { data })
}

export const onMentionSearch = value => {
  // const mentionList = R.map(m => ({ ...m, name: m.nickname }), testMentions)
  if (value && value.length >= 2) {
    debug('search user for ', value)
    sr71$.query(S.searchUsers, { name: value })
  } else {
    store.markState({ mentionList: [] })
    // sr71$.query(S.commentParti..., { name: value })
  }
  // store.markState({ mentionList })
}

export const onMention = user => store.addReferUser(user)

const openAttachment = att => {
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
    match: asyncErr(ERR.CRAPHQL),
    action: ({ details }) => {
      // const errMsg = details[0].detail
      const errMsg = errorForHuman(details)
      meteorState(store, 'error', 5, errMsg)
      cancleLoading()
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      debug('ERR.TIMEOUT -->', details)
      cancleLoading()
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: ({ details }) => {
      debug('ERR.NETWORK -->', details)
      cancleLoading()
    },
  },
]

export function init(_store, attachment) {
  // if (store) return openAttachment(attachment)
  store = _store

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  openAttachment(attachment)
}

export function uninit() {
  if (store.publishing || !sub$) return false
  debug('===== do uninit')
  store.markState({ editPost: {} })
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
