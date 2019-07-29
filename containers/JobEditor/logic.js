import R from 'ramda'
import { useEffect } from 'react'

import { TYPE, EVENT, ERR, THREAD } from '@constant'
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
  nilOrEmpty,
  errRescue,
  BStore,
} from '@utils'

import { S, updatableJobFields } from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:JobEditor')

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

const loadJob = id => sr71$.query(S.job, { id })

const openAttachment = att => {
  if (!att) return false
  // const { id, title, body, digest } = att
  const { type } = att
  if (type === TYPE.PREVIEW_JOB_EDIT) loadJob(att.id)

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

  if (store.isEdit && content === '') return false
  // extractMentions: extractMentions(content)
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
    match: asyncRes('createJob'),
    action: () => {
      store.toast('success', {
        title: '招聘信息已发布',
        msg: '预祝你在这里的招聘工作一切顺利 :)',
        position: 'topCenter',
      })

      doneCleanUp()
      clearDraft()
      send(EVENT.REFRESH_JOBS)
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
      send(EVENT.REFRESH_JOBS)
    },
  },

  {
    match: asyncRes('job'),
    action: ({ job }) => store.updateEditing(job),
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
      errRescue({ type: ERR.TIMEOUT, details, path: 'JobEditor' })
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

const initDraftTimmer = () => {
  // only save draft in create mode
  if (store.isEdit) return false
  if (saveDraftTimmer) clearInterval(saveDraftTimmer)

  saveDraftTimmer = setInterval(() => saveDraftIfNeed(store.editJob.body), 3000)
}

// ###############################
// init & uninit
// ###############################
export const useInit = (_store, attachment) => {
  useEffect(() => {
    store = _store
    // log('effect init')
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    openAttachment(attachment)
    initDraftTimmer()

    return () => {
      // log('effect uninit')
      if (saveDraftTimmer) clearInterval(saveDraftTimmer)
      store.markState({ editJob: {} })
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store, attachment])
}
