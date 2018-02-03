import R from 'ramda'
import { notification } from 'antd'

import { makeDebugger, isEmptyValue, EVENT } from '../../utils'
import S from './schema'
import SR71 from '../../utils/network/sr71'

const sr71$ = new SR71()

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:TypeWriter')
/* eslint-enable no-unused-vars */

let typeWriter = null
let sub$ = null

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

function shootMsg(title, body) {
  notification.error({
    message: title,
    description: body,
    duration: 3,
    style: {
      color: '#619095',
      background: '#F9FCFC',
    },
  })
}

function checkValid() {
  const { body, title, articleType, linkAddr } = typeWriter
  if (isEmptyValue(body) || isEmptyValue(title)) {
    shootMsg('出问题了', '文章标题 或 文章内容 不能为空')
    return false
  }
  if (articleType !== 'original' && isEmptyValue(linkAddr)) {
    shootMsg('请填写原始文章地址', '请填写完整地址以方便跳转, http(s)://...')
    return false
  }
  return true
}

export function onPublish() {
  // debug('onPublish: ', typeWriter.body)
  const { body, title, articleType } = typeWriter
  if (checkValid()) {
    typeWriter.markState({
      publishing: true,
    })

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
    }
    if (articleType !== 'original') variables.linkAddr = typeWriter.linkAddr

    debug('variables: ', variables)
    //     return false
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

const dataResolver = [
  {
    match: R.has(S.createPostRes),
    action: res => {
      debug('action res', res)
      typeWriter.markState({
        publishing: false,
      })
    },
  },
  {
    match: R.has(EVENT.PREVIEW),
    action: () => {},
  },
]

const handleData = res => {
  for (let i = 0; i < dataResolver.length; i += 1) {
    if (dataResolver[i].match(res)) {
      return dataResolver[i].action(res)
    }
  }
  debug('handleData unhandle: ', res)
}

export function init(selectedStore) {
  typeWriter = selectedStore
  debug(typeWriter)
  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe(handleData)
}
