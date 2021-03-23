import { useEffect, RefObject } from 'react'

const useOutsideClick = (
  ref: RefObject<HTMLElement>,
  callback?: (e) => void,
): void => {
  const handleClick = (e): void => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback?.(e)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}

export default useOutsideClick
