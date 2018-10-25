import R from 'ramda'

import {
  asyncRes,
  asyncErr,
  $solver,
  makeDebugger,
  dispatchEvent,
  THREAD,
  EVENT,
  ERR,
  meteorState,
  countWords,
  extractAttachments,
  isObject,
} from '../../utils'

import S from './schema'
import SR71 from '../../utils/network/sr71'

const sr71$ = new SR71()

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:TypeWriter')
/* eslint-enable no-unused-vars */

let store = null
let sub$ = null

export function changeView(curView) {
  store.markState({ curView })
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

export function onPublish() {
  if (store.activeThread === THREAD.POST) {
    return publishPost()
  }
  return publishJob()
}

function publishPost() {
  if (!store.validator(THREAD.POST)) return false
  const { body } = store.editData
  publishing()

  const digest = getDigest(body)
  const length = countWords(body)

  const variables = {
    ...store.editData,
    digest,
    length,
    communityId: store.viewing.community.id,
  }

  // if (copyRight !== 'original') variables.linkAddr = store.linkAddr
  debug('variables-: ', variables)
  // TODO: switch createJob
  sr71$.mutate(S.createPost, variables)
}

function publishJob() {
  debug('TODO: publishJob: ', store.editData)
  debug('labelEntriesData: ', store.labelsData)

  if (!store.validator(`${THREAD.JOB}_LABELS`)) return false
}

export const canclePublish = () => {
  cancleLoading()
  // store.reset()
  store.closePreview()
}

export const inputOnChange = (part, e) => {
  if (!store) return false
  const value = isObject(e) ? e.target.value : e
  store.updateEditing({ [part]: value })
}

const publishing = (maybe = true) => store.markState({ publishing: maybe })

export const onUploadImageDone = url =>
  dispatchEvent(EVENT.DRAFT_INSERT_SNIPPET, { data: `![](${url})` })

export function insertCode() {
  const communityRaw = store.curCommunity.raw
  const data = `\`\`\`${communityRaw}\n\n\`\`\``

  dispatchEvent(EVENT.DRAFT_INSERT_SNIPPET, { data })
}

const openAttachment = att => {
  if (!att) return false
  // const { id, title, body, digest } = att
  debug('openAttachment: ', att)

  store.updateEditing(att)
  store.markState({ isEdit: true })
  // TODO: load if needed
}

const cancleMutate = () => store.reset()

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
      debug('--> ERR.CRAPHQL -->', details)
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
