import { makeDebugger, EVENT } from '../../utils'
import SR71 from '../../utils/network/sr71'

const sr71$ = new SR71({ resv_event: EVENT.PREVIEW_IT })

const debug = makeDebugger('L:Preview')

let preview = null

export function changeTheme(name) {
  preview.changeTheme(name)
}

export function closePreview() {
  debug('closePreview')
  preview.close()
}

export function init(selectedStore) {
  preview = selectedStore
  debug('init')
  sr71$.data().subscribe(res => {
    // if (res.error) return handleError(res)
    debug('Logic ret:8', res)
  })
  /*
  PubSub.unsubscribe('hello')
  PubSub.subscribe('hello', (_, data) => {
    debug('subscribe--:', data)
    preview.open('post')
  })
  */
}

export function unInit() {
  debug('un - init ')
}
