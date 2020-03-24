import { useEffect, useState } from 'react'
import OverlayScrollbars from 'overlayscrollbars'

/**
 * options detail see:
 * https://kingsora.github.io/OverlayScrollbars/#!documentation/options
 *
 * @returns
 */
const useCustomScroll = (ref, option = {}) => {
  const [inited, setInited] = useState(false)

  useEffect(() => {
    if (OverlayScrollbars && ref.current) {
      const defaultOption = {
        scrollbars: { autoHide: 'scroll' },
        className: 'os-theme-light',
        callbacks: {
          onInitialized: () => {
            console.log('setInited')
            setInited(true)
          },
        },
      }
      OverlayScrollbars(ref.current, Object.assign(defaultOption, option))
    }
  }, [ref, option, inited]) // Empty array ensures that effect is only run on mount and unmount

  return inited
}

export default useCustomScroll
