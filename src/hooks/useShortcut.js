import { useEffect } from 'react'
import tinykeys from 'tinykeys'

const useShortcut = (combination, cb) => {
  useEffect(() => {
    const handlers = {}
    if (Array.isArray(combination)) {
      for (let i = 0; i < combination.length; i += 1) {
        handlers[combination[i]] = (event) => {
          event.preventDefault()
          return cb()
        }
      }
    } else {
      handlers[combination] = (event) => {
        event.preventDefault()
        return cb()
      }
    }

    const unsubscribe = tinykeys(window, handlers)
    return () => {
      unsubscribe()
    }
  })
}

export default useShortcut
