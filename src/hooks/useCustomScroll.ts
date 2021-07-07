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
  // 如果传入 instanceKey, 那么会赋给 window 一个对应的 OverlayScrollbars 对象用来操作定位到某个元素
  // 因为全局使用了 OverlayScrollbars, 常规的 scrollerTo 不会起作用
  // see: https://github.com/KingSora/OverlayScrollbars/issues/100
  instanceKey?: string
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
    if (OverlayScrollbars && ref.current && !scrollInstance) {
      option.className =
        option.themeCategory === 'dark' ? 'os-theme-light' : 'os-theme-dark'
      delete option.themeCategory

      const defaultOption = {
        scrollbars: { autoHide: 'scroll' },
        className: 'os-theme-light',
        callbacks: { ...option.callbacks },
      }
      const { instanceKey, ...restOptions } = option
      const instance = OverlayScrollbars(
        ref.current,
        Object.assign(defaultOption, restOptions),
      )

      if (instanceKey && typeof window === 'object') {
        window[instanceKey] = instance
      }
      setScrollInstance(instance)
    }
    // Empty array ensures that effect is only run on mount and unmount
  }, [ref, option, scrollInstance])

  return scrollInstance
}

export default useCustomScroll
