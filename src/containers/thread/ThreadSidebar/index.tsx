//

/*
 *
 * ThreadSidebar
 *
 */

import { FC, Fragment } from 'react'

import type { TTag } from '@/spec'
import { C11N } from '@/constant'
import { pluggedIn, buildLog } from '@/utils'

import ClassicView from './ClassicView'
import HolyGrailView from './HolyGrailView'

import type { TStore } from './store'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ThreadSidebar')

export type TBaseProps = {
  activeTag?: TTag

  onCreate?: () => void
  onTagSelect?: () => void
  onAdsClose?: () => void
}

export type TProps = { threadSidebar?: TStore } & TBaseProps

const ThreadSidebarContainer: FC<TProps> = ({
  threadSidebar: store,
  onCreate,
  onTagSelect,
  onAdsClose,
}) => {
  useInit(store)

  const {
    accountInfo: {
      customization: { bannerLayout },
    },
    curCommunity,
    isCommunityDigestInViewport,
  } = store

  return (
    <Fragment>
      {bannerLayout === C11N.CLASSIC ? (
        <ClassicView
          showCommunityBadge={isCommunityDigestInViewport}
          onCreate={onCreate}
          onTagSelect={onTagSelect}
          onAdsClose={onAdsClose}
        />
      ) : (
        <HolyGrailView community={curCommunity} />
      )}
    </Fragment>
  )
}

export default pluggedIn(ThreadSidebarContainer) as FC<TProps>
