import { useEffect, useState } from 'react'
import OverlayScrollbars from 'overlayscrollbars'

/**
 * options detail see:
 * https://kingsora.github.io/OverlayScrollbars/#!documentation/options
 *
 * @returns
 */
const useCustomScroll = (ref, option = {}) => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    if (OverlayScrollbars && ref.current) {
      option.className =
        option.themeCategory === 'dark' ? 'os-theme-light' : 'os-theme-dark'
      delete option.themeCategory

      const defaultOption = {
        scrollbars: { autoHide: 'scroll' },
        className: 'os-theme-light',
        callbacks: {
          onInitialized: () => {
            setInit(true)
          },
        },
      }
      OverlayScrollbars(ref.current, Object.assign(defaultOption, option))
    }
  }, [ref, option, init]) // Empty array ensures that effect is only run on mount and unmount

  return init
}

export default useCustomScroll
