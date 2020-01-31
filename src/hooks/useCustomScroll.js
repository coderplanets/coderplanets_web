import { useEffect } from 'react'
import OverlayScrollbars from 'overlayscrollbars'

/**
 * options detail see:
 * https://kingsora.github.io/OverlayScrollbars/#!documentation/options
 *
 * @returns
 */
const useCustomScroll = (ref, option = {}) => {
  useEffect(() => {
    if (OverlayScrollbars && ref.current) {
      const defaultOption = {
        scrollbars: { autoHide: 'scroll' },
        className: 'os-theme-light',
      }
      OverlayScrollbars(ref.current, Object.assign(defaultOption, option))
    }
  }, [ref]) // Empty array ensures that effect is only run on mount and unmount
}

export default useCustomScroll
