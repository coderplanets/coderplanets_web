import R from 'ramda'
import { useEffect } from 'react'

import { makeDebugger, makeGQClient } from '@utils'

import S from './schema'

/* eslint-disable-next-line */
const debug = makeDebugger('L:Labeler')

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
  // toggle item if exsit
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

export const onTagSelect = R.curry((uniqId, selected, callbacks, item) => {
  const { onTagSelectCb, onTagUnselectCb } = callbacks

  onOptionSelect(uniqId, item)
  const tagId = store.getSelectedTagId(item)
  if (R.contains(item, selected)) {
    onTagUnselectCb(tagId)
  } else {
    onTagSelectCb(tagId)
  }
})

export const getSelectedTagId = label => {
  return store.getSelectedTagId(label)
}

export const onVisibleChange = R.curry((uniqId, popVisible) => {
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
})

// ###############################
// init & uninit
// ###############################
export const useInit = (_store, uniqId, options) => {
  useEffect(
    () => {
      store = _store
      store.markUniqState(uniqId, options)

      return () => {
        store.uninit(uniqId)
      }
    },
    [_store, uniqId, options]
  )
}
