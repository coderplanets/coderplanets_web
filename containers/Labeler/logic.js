import R from 'ramda'

import { makeDebugger, $solver, makeGQClient } from '../../utils'
import SR71 from '../../utils/network/sr71'

import S from './schema'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:Labeler')
/* eslint-enable no-unused-vars */

let store = null

export function loadTags(uniqId) {
  const communityId = store.curCommunity.id
  const thread = R.toUpper(store.curThread)

  const args = { communityId, thread }
  const { request } = makeGQClient()

  request(S.partialTags, args)
    .then(({ partialTags: tags }) => store.markUniqState(uniqId, { tags }))
    .catch(() => store.toast('error', { title: 'tag 加载失败', msg: '--' }))
}

export function onOptionSelect(uniqId, item) {
  const index = R.findIndex(R.propEq('uniqId', uniqId))(store.labelEntriesData)
  if (index < 0) return false
  // return false
  // toggle item if exsit
  if (R.contains(item, store.labelEntriesData[index].bucket)) {
    return store.markUniqState(uniqId, {
      bucket: R.reject(e => e === item, store.labelEntriesData[index].bucket),
    })
  }
  // replace bucket if single select mode
  if (!store.labelEntriesData[index].multi) {
    return store.markUniqState(uniqId, { popVisible: false, bucket: [item] })
  }
  // push to bucket if multi select mode
  store.markUniqState(uniqId, {
    bucket: R.uniq(R.concat(store.labelEntriesData[index].bucket, [item])),
  })
}

export function onVisibleChange(uniqId, popVisible) {
  store.markUniqState(uniqId, { popVisible })

  const index = R.findIndex(R.propEq('uniqId', uniqId))(store.labelEntriesData)
  if (index < 0) return false

  const needLoad =
    store.labelEntriesData[index].label === 'default' ||
    store.labelEntriesData[index].label === 'city'

  if (popVisible && needLoad) {
    // logic.loadTagsIfNeed()
    loadTags(uniqId)
  }
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  /*
  {
    match: asyncRes('partialTags'),
    action: ({ partialTags: tags }) => store.markUniqState({ tags }),
  },
  */
]
const ErrSolver = []

export function init(_store, uniqId, options) {
  if (store) {
    return store.markUniqState(uniqId, options)
    // return store.markState({ ...options })
  }
  store = _store

  debug(store)
  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

  return store.markUniqState(uniqId, options)
  // return store.markState({ ...options })
}

export function uninit(uniqId) {
  store.uninit(uniqId)
}
