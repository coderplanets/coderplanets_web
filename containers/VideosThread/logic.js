import R from 'ramda'

import { PAGE_SIZE } from '../../config'
import {
  makeDebugger,
  $solver,
  TYPE,
  scrollIntoEle,
  asyncRes,
} from '../../utils'

import S from './schema'
import SR71 from '../../utils/network/sr71'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:VideosThread')
/* eslint-enable no-unused-vars */

let store = null

const validFilter = R.pickBy(
  R.compose(
    R.not,
    R.isEmpty
  )
)

export function loadVideos(page = 1) {
  const { mainPath } = store.curRoute
  const community = mainPath
  store.markState({ curView: TYPE.LOADING })

  const args = {
    filter: {
      page,
      size: PAGE_SIZE.COMMON,
      ...store.filtersData,
      tag: store.activeTagData.raw,
      community,
    },
  }

  args.filter = validFilter(args.filter)
  scrollIntoEle(TYPE.APP_HEADER_ID)

  debug('load videos --> ', args)
  sr71$.query(S.pagedVideos, args)
  store.markRoute({ page })
}

export function onTitleSelect() {
  debug('onTitleSelect')
}

export function createContent() {
  debug('createContent')
}

export function onTagSelect() {
  debug('onTagSelect')
}

export function onFilterSelect() {
  debug('onFilterSelect')
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('pagedVideos'),
    action: ({ pagedVideos }) => {
      /* debug('========> pagedVideos: ', pagedVideos) */
      let curView = TYPE.RESULT
      if (pagedVideos.entries.length === 0) {
        curView = TYPE.RESULT_EMPTY
      }
      store.markState({ curView, pagedVideos })
    },
  },
  {
    match: asyncRes('partialTags'),
    action: ({ partialTags: tags }) => store.markState({ tags }),
  },
]
const ErrSolver = []

const loadIfNeed = () => {
  /* loadVideos() */
  /* console.log('store.pagedVideos.entries --> ', store.pagedVideosData.entries) */
  if (R.isEmpty(store.pagedVideosData.entries)) {
    loadVideos()
  }
}

export function init(_store) {
  if (store) {
    loadIfNeed()
    return false
  }
  store = _store

  debug(store)
  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

  loadIfNeed()
}
