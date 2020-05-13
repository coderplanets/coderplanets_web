import R from 'ramda'

import { buildLog, asyncSuit, makeGQClient } from '@/utils'
import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:Labeler')

const { SR71, $solver } = asyncSuit
const sr71$ = new SR71()

let sub$ = null
let store = null

export const loadTags = uniqId => {
  const communityId = store.curCommunity.id
  const thread = R.toUpper(store.curThread)

  const args = { communityId, thread }
  const { request } = makeGQClient()

  request(S.partialTags, args)
    .then(({ partialTags: tags }) => store.markUniqState(uniqId, { tags }))
    .catch(() => store.toast('error', { title: 'tag 加载失败', msg: '--' }))
}

export const onOptionSelect = (uniqId, item) => {
  const index = R.findIndex(R.propEq('uniqId', uniqId))(store.labelEntriesData)
  if (index < 0) return false
  // return false
  // toggle item if exist
  if (R.contains(item, store.labelEntriesData[index].selected)) {
    return store.markUniqState(uniqId, {
      selected: R.reject(
        e => e === item,
        store.labelEntriesData[index].selected
      ),
    })
  }
  // replace selected if single select mode
  if (!store.labelEntriesData[index].multi) {
    return store.markUniqState(uniqId, { popVisible: false, selected: [item] })
  }
  // push to selected if multi select mode
  store.markUniqState(uniqId, {
    selected: R.uniq(R.concat(store.labelEntriesData[index].selected, [item])),
  })
}

export const getSelectedTagId = label => {
  return store.getSelectedTagId(label)
}

export const onVisibleChange = (uniqId, popVisible) => {
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

export const init = (_store, uniqId, options) => {
  store = _store

  if (sub$) false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

  store.markUniqState(uniqId, options)
}

export const uninit = uniqId => store.uninit(uniqId)
