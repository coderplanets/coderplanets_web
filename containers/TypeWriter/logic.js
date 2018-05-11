import R from 'ramda'

import {
  gqRes,
  gqErr,
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

let typeWriter = null

export function copyrightChange(articleType) {
  typeWriter.markState({
    articleType,
  })
}

export function changeView(curView) {
  typeWriter.markState({
    curView,
  })
}

function checkValid() {
  const { body, title, articleType, linkAddr } = typeWriter
  if (isEmptyValue(body) || isEmptyValue(title)) {
    meteorState(typeWriter, 'error', 5, '文章标题 或 文章内容 不能为空')
    return false
  }
  if (articleType !== 'original' && isEmptyValue(linkAddr)) {
    meteorState(
      typeWriter,
      'error',
      5,
      '请填写完整地址以方便跳转, http(s)://...'
    )
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
  // debug('onPublish: ', typeWriter.body)
  const { body, title, articleType } = typeWriter
  if (checkValid()) {
    publishing()

    const digest = getDigest(body)
    const length = countWords(body)

    const variables = {
      title,
      body,
      digest,
      length,
      community: typeWriter.curCommunity.title,
    }

    if (articleType !== 'original') variables.linkAddr = typeWriter.linkAddr
    // debug('curCommunity: ', typeWriter.curCommunityName)
    // debug('variables-: ', variables)
    sr71$.mutate(S.createPost, variables)
  }
}

export const canclePublish = () => {
  debug('canclePublish')
  cancleLoading()
  // typeWriter.reset()
  typeWriter.closePreview()
}

export function bodyOnChange(body) {
  // debug('editorOnChange: ', body)
  typeWriter.markState({
    body,
  })
}

export function titleOnChange(e) {
  typeWriter.markState({
    title: e.target.value,
  })
}

export function linkSourceOnChange(e) {
  typeWriter.markState({
    linkAddr: e.target.value,
  })
}

function publishing(maybe = true) {
  typeWriter.markState({
    publishing: maybe,
  })
}

const DataSolver = [
  {
    match: gqRes('createPost'),
    action: () => {
      cancleLoading()
      typeWriter.reset()
      typeWriter.closePreview()
      dispatchEvent(EVENT.REFRESH_POSTS)
      // 1. empty the store
      // 2. close the preview
      // 3. notify the xxxPaper
    },
  },
  {
    match: gqRes(EVENT.PREVIEW),
    action: () => {},
  },
]

const cancleLoading = () => {
  typeWriter.markState({
    publishing: false,
  })
}

const ErrSolver = [
  {
    match: gqErr(ERR.CRAPHQL),
    action: ({ details }) => {
      const errMsg = details[0].detail
      debug('ERR.CRAPHQL -->', details)
      meteorState(typeWriter, 'error', 5, errMsg)
      cancleLoading()
    },
  },
  {
    match: gqErr(ERR.TIMEOUT),
    action: ({ details }) => {
      debug('ERR.TIMEOUT -->', details)
      cancleLoading()
    },
  },
  {
    match: gqErr(ERR.NETWORK),
    action: ({ details }) => {
      debug('ERR.NETWORK -->', details)
      cancleLoading()
    },
  },
]

export function init(selectedStore) {
  typeWriter = selectedStore
  sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}
