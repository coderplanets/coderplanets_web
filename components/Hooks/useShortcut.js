import { useEffect, useState } from 'react'

// see https://github.com/streamich/react-use/blob/master/src/useKeyboardJs.ts
const useShortcut = (combination, onKeyDownFn, onKeyUpFn) => {
  const [state, set] = useState([false, null])
  const [keyboardJs, setKeyboardJs] = useState(null)

  useEffect(() => {
    import('keyboardjs').then(setKeyboardJs)
  }, [])

  useEffect(
    () => {
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

      keyboardJs.bind(combination, down, up)
      return () => {
        keyboardJs.unbind(combination, down, up)
      }
    },
    [combination, keyboardJs]
  )

  return state
}

export default useShortcut
