// see https://stackoverflow.com/questions/48048957/react-long-press-event
import { useState, useEffect, useCallback } from 'react'

/**
 *
 * see https://stackoverflow.com/questions/48048957/react-long-press-event
 *
 * usage:
 *
 * import { useLangPress } from '@/hooks'
 *
 * const longPress = useLangPress(() => {
 *   alert("langPress works")
 * }, 500);
 *
 * <Title  {...longPress}>
 *   ...
 * </Title>
 *
 * @param {*} [callback=() => { }]
 * @param {number} [ms=500] hold m-sec
 * @returns
 */
const useLongPress = (callback: () => void, ms = 500) => {
  const [startLongPress, setStartLongPress] = useState(false)

  useEffect(() => {
    let timerId
    if (startLongPress) {
      timerId = setTimeout(callback, ms)
    } else {
      clearTimeout(timerId)
    }

    return () => {
      clearTimeout(timerId)
    }
  }, [callback, ms, startLongPress])

  const start = useCallback(() => {
    setStartLongPress(true)
  }, [])
  const stop = useCallback(() => {
    setStartLongPress(false)
  }, [])

  return {
    onMouseDown: start,
    onMouseUp: stop,
    onMouseLeave: stop,
    onTouchStart: start,
    onTouchEnd: stop,
  }
}

export default useLongPress
