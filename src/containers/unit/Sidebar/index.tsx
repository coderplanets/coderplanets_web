/*
 *
 * Sidebar
 *
 */

import { FC, useRef, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import LoadingBlocks from './LoadingBlocks'
import PullButton from './PullButton'

import { Wrapper } from './styles'
import type { TStore } from './store'
import { useInit, togglePulled } from './logic'

let RealSidebar = null

/* eslint-disable-next-line */
const log = buildLog('C:Sidebar:index')

type TProps = {
  sidebar?: TStore
}

const SidebarContainer: FC<TProps> = ({ sidebar: store }) => {
  useInit(store)
  const [loaded, setLoaded] = useState(false)
  const { isPulled, pin } = store

  const ref = useRef(null)

  useEffect(() => {
    const loadSidebar = async () => {
      if (isPulled && !RealSidebar) {
        // eslint-disable-next-line require-atomic-updates
        RealSidebar = await dynamic(() => import('./RealSidebar'), {
          /* eslint-disable react/display-name */
          loading: () => <LoadingBlocks />,
          ssr: false,
        })
        setLoaded(true)
      }
    }
    loadSidebar()
  }, [isPulled])

  return (
    <Wrapper ref={ref} isPulled={isPulled}>
      {!pin && <PullButton onClick={togglePulled} isPulled={isPulled} />}
      {loaded && <RealSidebar />}
    </Wrapper>
  )
}

export default pluggedIn(SidebarContainer) as FC<TProps>
