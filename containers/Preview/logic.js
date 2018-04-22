import R from 'ramda'
import { makeDebugger, EVENT, holdPage, TYPE, dispatchEvent } from '../../utils'
import SR71 from '../../utils/network/sr71'

// const sr71$ = new SR71({ resv_event: EVENT.PREVIEW })
const sr71$ = new SR71({
  resv_event: [EVENT.NAV_EDIT, EVENT.PREVIEW, EVENT.NAV_CREATE_POST],
})

const debug = makeDebugger('L:Preview')

let preview = null
let sub$ = null

export function closePreview() {
  debug('closePreview')
  preview.close()

  // force call Typewriter's componentWillUnmount to store the draft
  dispatchEvent(EVENT.PREVIEW_CLOSE)
  // wait until preview move out of the screean
  setTimeout(() => {
    preview.markState({ type: null })
  }, 500)
}

function loadDataForPreview(info) {
  debug('loadDataForPreview: ', info)
  if (info.type === TYPE.POST_PREVIEW_VIEW) {
    // debug('load fucking post: ', info.data)
    dispatchEvent(EVENT.PREVIEW_POST, { type: TYPE.POST, data: info.data })
    // loadPost(info.data)
  }
}

const dataResolver = [
  {
    match: R.has(EVENT.PREVIEW),
    action: res => {
      const event = res[EVENT.PREVIEW]
      holdPage()
      preview.open(event.type)
    },
  },
  {
    match: R.has(EVENT.NAV_EDIT),
    action: res => {
      const event = res[EVENT.NAV_EDIT]
      holdPage()

      debug('EVENT.NAV_EDIT: ', res)
      preview.open(event.type)
      loadDataForPreview(res[EVENT.NAV_EDIT])
    },
  },
  {
    match: R.has(EVENT.NAV_CREATE_POST),
    action: res => {
      const event = res[EVENT.NAV_CREATE_POST]
      holdPage()
      preview.open(event.type)
    },
  },
]

const handleData = res => {
  // TODO: handle Error
  for (let i = 0; i < dataResolver.length; i += 1) {
    if (dataResolver[i].match(res)) {
      return dataResolver[i].action(res)
    }
  }
  debug('handleData unhandle: ', res)
}

export function init(selectedStore) {
  preview = selectedStore
  debug('@@@ init @@0')
  if (sub$) sub$.unsubscribe()

  sub$ = sr71$.data().subscribe(handleData)
}
