import { useState, useEffect } from 'react'

/**
 * hooks for detect window size
 * see: https://usehooks.com/useWindowSize/ for details
 *
 * @returns
 */
const useWindowSize = cb => {
  const isClient = typeof window === 'object'

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    if (!isClient) {
      return false
    }

    function handleResize() {
      setWindowSize(getSize())
      if (cb) cb(getSize())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [cb, getSize, isClient]) // Empty array ensures that effect is only run on mount and unmount

  return windowSize
}

export default useWindowSize
