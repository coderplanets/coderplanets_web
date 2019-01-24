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
  TYPE,
  countWords,
  extractAttachments,
  extractMentions,
  updateEditing,
  closePreviewer,
  cast,
  nilOrEmpty,
  errRescue,
} from 'utils'

import SR71 from 'utils/async/sr71'
import { S, updatableJobFields } from './schema'
// import testMentions from './test_mentions'

const sr71$ = new SR71()

/* eslint-disable-next-line */
const debug = makeDebugger('L:JobEditor')

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

export const onPublish = () => {
  if (
    !store.validator('general') ||
    !store.validator('companyInfo') ||
    !store.validator(`${THREAD.JOB}_LABELS`)
  ) {
    return false
  }

  const { isEdit } = store
  const { body } = store.editData

  const digest = getDigest(body)
  const length = countWords(body)

  const variables = {
    ...store.editData,
    ...store.labelsData,
    digest,
    length,
    communityId: store.viewing.community.id,
    mentionUsers: R.map(user => ({ id: user.id }), store.referUsersData),
  }

  if (nilOrEmpty(variables.desc)) variables.desc = '不加班,福利好,美女多..'

  publishing()
  if (isEdit) {
    const args = cast(
      updatableJobFields,
      R.merge(variables, { tags: store.labelsData.tags })
    )
    return sr71$.mutate(S.updateJob, args)
  }

  sr71$.mutate(S.createJob, variables)
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

const loadJob = id => sr71$.query(S.job, { id })

const openAttachment = att => {
  if (!att) return false
  // const { id, title, body, digest } = att
  const { type } = att
  if (type === TYPE.PREVIEW_JOB_EDIT) {
    debug('laod the fucking job: ', att)
    loadJob(att.id)
  }

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
    match: asyncRes('createJob'),
    action: () => {
      store.toast('success', {
        title: '招聘信息已发布',
        msg: '预祝你在这里的招聘工作一切顺利 :)',
        position: 'topCenter',
      })

      doneCleanUp()
      dispatchEvent(EVENT.REFRESH_JOBS)
    },
  },
  {
    match: asyncRes('updateJob'),
    action: () => {
      store.toast('success', {
        title: '更新成功',
        msg: '.',
        position: 'topCenter',
      })

      doneCleanUp()
      dispatchEvent(EVENT.REFRESH_JOBS)
    },
  },

  {
    match: asyncRes('job'),
    action: ({ job }) => {
      debug('job load done -->: ', job)
      store.updateEditing(job)
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
      errRescue({ type: ERR.NETWORK, path: 'JobEditor' })
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
  store.markState({ editJob: {} })
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
