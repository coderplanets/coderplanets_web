import R from 'ramda'

import {
  asyncRes,
  asyncErr,
  $solver,
  makeDebugger,
  isEmptyValue,
  dispatchEvent,
  EVENT,
  ERR,
  meteorState,
  countWords,
  extractAttachments,
} from '../../utils'
import S from './schema'
import SR71 from '../../utils/network/sr71'

const sr71$ = new SR71()

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:TypeWriter')
/* eslint-enable no-unused-vars */

let store = null
let sub$ = null

export function copyrightChange(cpType) {
  store.markState({ cpType })
}

export function changeView(curView) {
  store.markState({ curView })
}

function checkValid() {
  const { body, title, cpType, linkAddr } = store
  if (isEmptyValue(body) || isEmptyValue(title)) {
    meteorState(store, 'error', 5, '文章标题 或 文章内容 不能为空')
    return false
  }
  if (cpType !== 'original' && isEmptyValue(linkAddr)) {
    meteorState(store, 'error', 5, '请填写完整地址以方便跳转, http(s)://...')
    return false
  }
  return true
}

export function onUploadImageDone(url) {
  debug('onUploadImageDone: ', url)
  dispatchEvent(EVENT.DRAFT_INSERT_SNIPPET, {
    type: 'Image',
    data: `![](${url})`,
  })
}

const getDigest = body => {
  /* eslint-disable no-undef */
  const digestContainer = document.getElementById(
    'typewriter-preview-container'
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
// TODO move specfical logic outof here
export function onPublish() {
  // debug('onPublish: ', store.body)
  const { body, title, cpType } = store
  if (checkValid()) {
    publishing()

    const digest = getDigest(body)
    const length = countWords(body)

    const variables = {
      title,
      body,
      digest,
      length,
      communityId: store.viewing.community.id,
    }

    if (cpType !== 'original') variables.linkAddr = store.linkAddr
    // debug('variables-: ', variables)
    // TODO: switch createJob
    sr71$.mutate(S.createPost, variables)
  }
}

export const canclePublish = () => {
  cancleLoading()
  // store.reset()
  store.closePreview()
}

export function bodyOnChange(body) {
  // debug('editorOnChange: ', body)
  store.markState({ body })
}

export function titleOnChange(e) {
  store.markState({ title: e.target.value })
}

export function linkSourceOnChange(e) {
  store.markState({ linkAddr: e.target.value })
}

function publishing(maybe = true) {
  store.markState({ publishing: maybe })
}

export function insertCode() {
  dispatchEvent(EVENT.DRAFT_INSERT_SNIPPET, {
    type: 'insert',
    data: '```javascript\n\n```',
  })
}

const openAttachment = att => {
  if (!att) return false

  const { id, title, body, digest } = att
  debug('openAttachment: ', att)

  store.markState({
    id,
    title,
    body: body || digest || '',
    isEdit: true,
  })
  // TODO: load if needed
}

const cancleMutate = () => {
  store.reset()
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('createPost'),
    action: () => {
      cancleLoading()
      store.reset()
      store.closePreview()
      dispatchEvent(EVENT.REFRESH_POSTS)
      // 1. empty the store
      // 2. close the preview
      // 3. notify the xxxPaper
    },
  },
]

const cancleLoading = () => {
  store.markState({ publishing: false })
}

const ErrSolver = [
  {
    match: asyncErr(ERR.CRAPHQL),
    action: ({ details }) => {
      const errMsg = details[0].detail
      debug('ERR.CRAPHQL -->', details)
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
  if (store) {
    return openAttachment(attachment)
  }
  store = _store

  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  openAttachment(attachment)
}

export function uninit() {
  store.toast('info', {
    title: 'todo',
    msg: '草稿已保存',
  })
  cancleMutate()
}
