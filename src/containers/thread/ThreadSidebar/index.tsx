//

/*
 *
 * ThreadSidebar
 *
 */

import { FC, Fragment } from 'react'

import type { TTag } from '@/spec'
import { C11N } from '@/constant'
import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import ClassicLayout from './ClassicLayout'
import HolyGrailLayout from './HolyGrailLayout'

import type { TStore } from './store'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ThreadSidebar')

export type TBaseProps = {
  activeTag?: TTag
  onTagSelect?: () => void
}

export type TProps = { threadSidebar?: TStore } & TBaseProps

const ThreadSidebarContainer: FC<TProps> = ({
  threadSidebar: store,
  onTagSelect,
}) => {
  useInit(store)
  const { c11n, curCommunity, isCommunityDigestInViewport, curThread } = store

  return (
    <Fragment>
      {c11n.bannerLayout === C11N.CLASSIC ? (
        <ClassicLayout
          showCommunityBadge={isCommunityDigestInViewport}
          thread={curThread}
          onTagSelect={onTagSelect}
        />
      ) : (
        <HolyGrailLayout community={curCommunity} />
      )}
    </Fragment>
  )
}

export default pluggedIn(ThreadSidebarContainer) as FC<TProps>
