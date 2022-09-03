//

/*
 *
 * ThreadSidebar
 *
 */

import { FC, Fragment } from 'react'

import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import ClassicLayout from './ClassicLayout'

import type { TStore } from './store'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ThreadSidebar')

export type TBaseProps = {
  //
}

export type TProps = { threadSidebar?: TStore } & TBaseProps

const ThreadSidebarContainer: FC<TProps> = ({ threadSidebar: store }) => {
  useInit(store)
  const { curCommunity, isCommunityDigestInViewport, curThread } = store

  return (
    <Fragment>
      <ClassicLayout
        showCommunityBadge={isCommunityDigestInViewport}
        thread={curThread}
        community={curCommunity}
      />
    </Fragment>
  )
}

export default bond(ThreadSidebarContainer, 'threadSidebar') as FC<TProps>
