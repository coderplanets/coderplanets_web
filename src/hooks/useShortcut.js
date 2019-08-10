import { useEffect, useState } from 'react'

// see https://github.com/streamich/react-use/blob/master/src/useKeyboardJs.ts
const useShortcut = (combination, onKeyDownFn, onKeyUpFn) => {
  const [state, set] = useState([false, null])
  const [keyboardJs, setKeyboardJs] = useState(null)

  useEffect(() => {
    import('keyboardjs').then(setKeyboardJs)
  }, [])

  useEffect(() => {
    if (!keyboardJs) {
      return
    }

    const down = event => {
      set([true, event])
      if (onKeyDownFn) onKeyDownFn()
    }
    const up = event => {
      set([false, event])
      if (onKeyUpFn) onKeyUpFn()
    }

    // support multi combination in array style
    if (Array.isArray(combination)) {
      for (let i = 0; i < combination.length; i += 1) {
        keyboardJs.bind(combination[i], down, up)
      }
    } else {
      keyboardJs.bind(combination, down, up)
    }

    return () => {
      if (Array.isArray(combination)) {
        for (let i = 0; i < combination.length; i += 1) {
          keyboardJs.unbind(combination[i], down, up)
        }
      } else {
        keyboardJs.unbind(combination, down, up)
      }
    }
  }, [combination, keyboardJs, onKeyDownFn, onKeyUpFn])

  return state
}

export default useShortcut
