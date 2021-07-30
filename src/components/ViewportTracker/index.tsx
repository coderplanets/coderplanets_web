// avold SSR to save first load build size
import { FC } from 'react'

import dynamic from 'next/dynamic'

type TProps = {
  /**
   * Function called when waypoint enters viewport
   */
  onEnter: () => void
  /**
   * Function called when waypoint leaves viewport
   */
  onLeave?: () => void
  /**
   * Whether to activate on horizontal scrolling instead of vertical
   */
  horizontal?: boolean
}

const Waypoint = dynamic(
  () => import('react-waypoint').then((mod) => mod.Waypoint),
  {
    ssr: false,
  },
)

export default Waypoint as FC<TProps>
