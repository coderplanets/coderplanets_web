import { useState, useEffect, useCallback } from 'react'

type TSize = {
  width?: number
  height?: number
}

/**
 * hooks for detect window size
 * see: https://usehooks.com/useWindowSize/ for details
 *
 * @returns
 */
const useWindowSize = (cb?: (size: TSize) => void): TSize => {
  const isClient = typeof window === 'object'

  const getSize = useCallback(() => {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    }
  }, [isClient])

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    if (!isClient) {
      return
    }

    const handleResize = () => {
      setWindowSize(getSize())
      cb?.(getSize())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [cb, getSize, isClient]) // Empty array ensures that effect is only run on mount and unmount

  return windowSize
}

export default useWindowSize
