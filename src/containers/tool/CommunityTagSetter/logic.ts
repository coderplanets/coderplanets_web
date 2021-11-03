import { useEffect } from 'react'
import { isEmpty } from 'ramda'

import type { TCommunity, TTag, TInput, TThread } from '@/spec'
import { errRescue } from '@/utils/helper'
import { ERR, EVENT } from '@/constant'
import { buildLog } from '@/utils/logger'
import asyncSuit from '@/utils/async'

import S from './schema'
import { TYPE, COMMUNITY_STYLE } from './constant'
import type { TStore } from './store'
import type { TType, TTagView } from './spec'

/* eslint-disable-next-line */
const log = buildLog('L:CommunityTagSetter')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit

let store: TStore | undefined
let sub$ = null

// @ts-ignore
const sr71$ = new SR71({
  // @ts-ignore
  receive: [
    EVENT.SELECT_COMMUNITY,
    EVENT.MOVE_TO_COMMUNITY,
    EVENT.MIRROR_TO_COMMUNITY,
    EVENT.SET_TAG,
  ],
})

export const changeTagView = (tagView: TTagView): void => {
  store.mark({ tagView })
}

export const changeSetter = (type: TType): void => {
  store.mark({ type })
}

export const communityOnSearch = (e: TInput): void => {
  store.mark({ communitySearchValue: e.target.value })
  doSearchCommunities()
}

export const toggleCommunity = (
  community: TCommunity,
  checked: boolean,
): void => {
  const { type, selectCommunity, undoSelectCommunity } = store
  const { raw } = community

  checked ? selectCommunity(raw) : undoSelectCommunity(raw)

  if (type === TYPE.SELECT_COMMUNITY) {
    onClose()
  }
}

// only support one tag for now
export const toggleTag = (tag: TTag, checked: boolean, callback): void => {
  if (checked) {
    store.mark({ selectedTags: [tag] })
    callback([tag], checked)
    // setTimeout()
    onClose()
  }
  // const { tagsList } = store
  // const { selectedTags } = tagsList

  // if (checked) {
  //   store.mark({ selectedTags: [Tag].concat(selectedTags) })
  //   onClose()
  //   return
  // }
  // store.mark({ selectedTags: reject((t) => t.id === tag.id, selectedTags) })
}

export const onClose = (): void => {
  store.mark({
    show: false,
    communitySearchValue: '',
    communitiesSearching: false,
    communitiesSearched: false,
    searchedCommunities: [],
    selectedCommunities: [],
  })
}

const loadArticleTags = (community: TCommunity, thread: TThread): void => {
  store.mark({ tagsLoading: true })

  const args = {
    filter: { communityId: community.id, thread: thread.toUpperCase() },
  }

  log('query tags args: ', args)
  sr71$.query(S.pagedArticleTags, args)
}

/**
 * search communities by current searchValue in store
 * @private
 */
const doSearchCommunities = () => {
  const { communitySearchValue: title, communityStyle } = store

  const args = { title }

  if (communityStyle !== COMMUNITY_STYLE.NORMAL) {
    // @ts-ignore
    args.category = communityStyle
  }

  if (!isEmpty(title)) {
    store.mark({ communitiesSearching: true })
  } else {
    store.mark({ communitiesSearching: false })
  }

  store.mark({ communitiesSearched: false })
  sr71$.query(S.searchCommunities, args)
}

const cancelLoading = () => store.mark({ communitiesSearching: false })

const DataSolver = [
  {
    match: asyncRes('searchCommunities'),
    action: ({ searchCommunities: { entries } }) => {
      store.mark({
        searchedCommunities: entries,
        communitiesSearching: false,
        communitiesSearched: true,
      })
    },
  },
  {
    match: asyncRes('pagedArticleTags'),
    action: ({ pagedArticleTags: { entries } }) => {
      store.mark({ tags: entries, tagsLoading: false })
    },
  },
  {
    match: asyncRes(EVENT.MIRROR_TO_COMMUNITY),
    action: () => {
      log('收到 MIRROR_TO_COMMUNITY')
      store.mark({ show: true, type: TYPE.MIRROR_COMMUNITY })
    },
  },
  {
    match: asyncRes(EVENT.MOVE_TO_COMMUNITY),
    action: () => {
      log('收到 MOVE_TO_COMMUNITY')
      store.mark({ show: true, type: TYPE.MOVE_COMMUNITY })
    },
  },
  {
    match: asyncRes(EVENT.SELECT_COMMUNITY),
    action: (data) => {
      log('收到 SELECT_COMMUNITY: ', data)
      const communityStyle =
        data[EVENT.SELECT_COMMUNITY].communityStyle || COMMUNITY_STYLE.NORMAL
      store.mark({ show: true, type: TYPE.SELECT_COMMUNITY, communityStyle })
    },
  },
  {
    match: asyncRes(EVENT.SET_TAG),
    action: (res) => {
      const { community, thread, tags } = res[EVENT.SET_TAG]
      store.mark({ show: true, type: TYPE.TAG, selectedTags: tags })
      loadArticleTags(community, thread)
    },
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => cancelLoading(),
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      errRescue({ type: ERR.TIMEOUT, details, path: 'CommunityTagSetter' })
      cancelLoading()
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      cancelLoading()
      errRescue({ type: ERR.NETWORK, path: 'CommunityTagSetter' })
    },
  },
]

// ###############################
// init & uninit handlers
// ###############################

export const useInit = (
  _store: TStore,
  selectedCommunity: TCommunity,
): void => {
  useEffect(() => {
    store = _store
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    log('init: ', selectedCommunity)

    store.mark({ selectedCommunities: [selectedCommunity] })

    return () => {
      log('effect uninit')
      if (!sub$) return
      // log('===== do uninit')
      sub$.unsubscribe()
    }
  }, [_store, selectedCommunity])
}
