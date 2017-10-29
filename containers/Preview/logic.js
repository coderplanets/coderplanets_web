import { makeDebugger } from '../../utils/functions'

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
}
