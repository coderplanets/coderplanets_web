import { makeDebugger, EVENT, holdPage, unholdPage } from '../../utils'
import SR71 from '../../utils/network/sr71'

const sr71$ = new SR71({ resv_event: EVENT.PREVIEW_IT })

const debug = makeDebugger('L:Preview')

let preview = null
let sub$ = null

export function changeTheme(name) {
  preview.changeTheme(name)
}

export function closePreview() {
  debug('closePreview')
  unholdPage()
  preview.close()
}

export function init(selectedStore) {
  preview = selectedStore
  debug('@@@ init @@@')
  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe(res => {
    // if (res.error) return handleError(res)
    debug('Logic ret:8', res)
    if (res[EVENT.PREVIEW_IT]) {
      holdPage()
      preview.open('post')
    }
  })
  /*
  PubSub.unsubscribe('hello')
  PubSub.subscribe('hello', (_, data) => {
    debug('subscribe--:', data)
    preview.open('post')
  })
  */
}
