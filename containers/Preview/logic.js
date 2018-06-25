import {
  asyncRes,
  $solver,
  makeDebugger,
  EVENT,
  holdPage,
  TYPE,
  dispatchEvent,
} from '../../utils'
import SR71 from '../../utils/network/sr71'

const sr71$ = new SR71({
  resv_event: [
    EVENT.NAV_EDIT,
    EVENT.PREVIEW,
    EVENT.NAV_CREATE_POST,
    EVENT.PREVIEW_CLOSE,
  ],
})

const debug = makeDebugger('L:Preview')

let store = null
let sub$ = null

export function closePreview() {
  debug('closePreview')
  store.close()

  // force call Typewriter's componentWillUnmount to store the draft
  // wait until preview move out of the screean
  setTimeout(() => {
    store.markState({ type: null })
    dispatchEvent(EVENT.PREVIEW_CLOSED)
  }, 200)
}

function loadDataForPreview(info) {
  debug('loadDataForPreview --> : ', info)
  if (info.type === TYPE.POST_PREVIEW_VIEW) {
    // debug('load fucking post: ', info.data)
    dispatchEvent(EVENT.PREVIEW_POST, { type: TYPE.POST, data: info.data })
    // loadPost(info.data)
  }
}

const DataResolver = [
  {
    match: asyncRes(EVENT.PREVIEW),
    action: res => {
      const event = res[EVENT.PREVIEW]
      holdPage()
      store.open(event.type)
    },
  },
  {
    match: asyncRes(EVENT.PREVIEW_CLOSE),
    action: () => closePreview(),
  },
  {
    match: asyncRes(EVENT.NAV_EDIT),
    action: res => {
      const event = res[EVENT.NAV_EDIT]
      holdPage()

      debug('--> EVENT.NAV_EDIT: ', res)
      store.open(event.type)
      loadDataForPreview(res[EVENT.NAV_EDIT])
    },
  },
  {
    match: asyncRes(EVENT.NAV_CREATE_POST),
    action: res => {
      const event = res[EVENT.NAV_CREATE_POST]
      holdPage()
      store.open(event.type)
    },
  },
]

export function init(_store) {
  if (store) return false
  store = _store

  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataResolver, []))
}
