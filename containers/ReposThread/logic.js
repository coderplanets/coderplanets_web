import R from 'ramda'

import { PAGE_SIZE } from '../../config'

import {
  makeDebugger,
  $solver,
  dispatchEvent,
  EVENT,
  TYPE,
  THREAD,
  scrollIntoEle,
  asyncRes,
} from '../../utils'

import S from './schema'
import SR71 from '../../utils/network/sr71'

const sr71$ = new SR71({
  resv_event: [EVENT.REFRESH_REPOS, EVENT.PREVIEW_CLOSED, EVENT.TABBER_CHANGE],
})
let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:ReposThread')
/* eslint-enable no-unused-vars */

let store = null

const validFilter = R.pickBy(R.compose(R.not, R.isEmpty))

export const inAnchor = () => store.setHeaderFix(false)
export const outAnchor = () => store.setHeaderFix(true)

export function loadRepos(page = 1) {
  const { mainPath } = store.curRoute
  const community = mainPath
  const userHasLogin = store.isLogin

  store.markState({ curView: TYPE.LOADING })

  const args = {
    filter: {
      page,
      size: PAGE_SIZE.D,
      ...store.filtersData,
      tag: store.activeTagData.raw,
      community,
    },
    userHasLogin,
  }

  args.filter = validFilter(args.filter)
  scrollIntoEle(TYPE.APP_HEADER_ID)

  debug('load repos --> ', args)
  sr71$.query(S.pagedRepos, args)
  store.markRoute({ page })
}

export function onTitleSelect(data) {
  setTimeout(() => store.setViewedFlag(data.id), 1500)
  dispatchEvent(EVENT.PREVIEW_OPEN, {
    type: TYPE.PREVIEW_REPO_VIEW,
    thread: THREAD.REPO,
    data,
  })
}

export function createContent() {
  debug('createContent')
  dispatchEvent(EVENT.PREVIEW_OPEN, { type: TYPE.PREVIEW_REPO_CREATE })
}

export function onTagSelect() {
  debug('onTagSelect')
}

export const onFilterSelect = option => store.selectFilter(option)

export const onCustomChange = option => store.updateC11N(option)

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('pagedRepos'),
    action: ({ pagedRepos }) => {
      debug('load pagedRepos -> ', pagedRepos)
      let curView = TYPE.RESULT
      if (pagedRepos.entries.length === 0) {
        curView = TYPE.RESULT_EMPTY
      }
      store.markState({ curView, pagedRepos })
    },
  },
  {
    match: asyncRes('partialTags'),
    action: ({ partialTags: tags }) => store.markState({ tags }),
  },
  {
    match: asyncRes(EVENT.TABBER_CHANGE),
    action: res => {
      const { data } = res[EVENT.TABBER_CHANGE]
      const { activeThread } = data
      if (activeThread === THREAD.REPO) return loadRepos()
    },
  },
  {
    match: asyncRes(EVENT.REFRESH_REPOS),
    action: () => loadRepos(),
  },
  {
    match: asyncRes(EVENT.PREVIEW_CLOSED),
    action: () => store.setViewing({ repo: {} }),
  },
]
const ErrSolver = []

export function init(_store) {
  store = _store

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}
