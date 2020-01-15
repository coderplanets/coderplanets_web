import { useEffect } from 'react'
import OverlayScrollbars from 'overlayscrollbars'

/**
 * options detail see:
 * https://kingsora.github.io/OverlayScrollbars/#!documentation/options
 *
 * @returns
 */
const useCustomScroll = (
  ref,
  option = {
    scrollbars: { autoHide: 'scroll' },
  }
) => {
  useEffect(() => {
    if (OverlayScrollbars && ref.current) {
      OverlayScrollbars(ref.current, option)
    }
  }, [ref]) // Empty array ensures that effect is only run on mount and unmount
}

export default useCustomScroll
