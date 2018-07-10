let store = null

const init = _store => {
  if (store) return false
  store = _store
}

export default init
