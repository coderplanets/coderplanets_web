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

export function onPublish() {
  // debug('onPublish: ', typeWriter.body)
  const { body, title, articleType } = typeWriter
  if (checkValid()) {
    publishing()

    /* eslint-disable no-undef */
    const digestContainer = document.getElementById(
      'typewriter-preview-container'
    )
    /* eslint-enable no-undef */

    const digest = R.slice(0, 65, R.trim(digestContainer.innerText))
    const { length } = body

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
      publishing(false)
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
