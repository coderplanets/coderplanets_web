import { useEffect, useState, RefObject } from 'react'
import OverlayScrollbars from 'overlayscrollbars'

type TOption = {
  className?: string
  themeCategory?: string
  scrollbars?: {
    autoHide?: 'scroll' | 'never' // string
  }
  callbacks?: {
    onScroll?: () => void
    onScrollStart?: () => void
    onScrollStop?: () => void
  }
  // more callbacks see overlayscrollbars docs
}

/**
 * options detail see:
 * https://kingsora.github.io/OverlayScrollbars/#!documentation/options
 *
 * @returns
 */
const useCustomScroll = (
  ref: RefObject<HTMLElement>,
  option: TOption = {},
): any => {
  const [scrollInstance, setScrollInstance] = useState(null)

  useEffect(() => {
    if (OverlayScrollbars && ref.current) {
      option.className =
        option.themeCategory === 'dark' ? 'os-theme-light' : 'os-theme-dark'
      delete option.themeCategory

      const defaultOption = {
        scrollbars: { autoHide: 'scroll' },
        className: 'os-theme-light',
        callbacks: { ...option.callbacks },
      }
      const instance = OverlayScrollbars(
        ref.current,
        Object.assign(defaultOption, option),
      )
      setScrollInstance(instance)
    }
  }, [ref, option]) // Empty array ensures that effect is only run on mount and unmount

  return scrollInstance
}

export default useCustomScroll
