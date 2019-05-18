// ...

// ###############################
// init & uninit
// ###############################
/*
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
*/
