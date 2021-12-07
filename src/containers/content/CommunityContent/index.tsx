/*
 * CommunityContent
 */

import { FC, Fragment } from 'react'

import { C11N } from '@/constant'
import { pluggedIn } from '@/utils/mobx'
import usePlatform from '@/hooks/usePlatform'

import ClassicLayout from './ClassicLayout'
import HolyGrailLayout from './HolyGrailLayout'

import type { TStore } from './store'
import { useInit } from './logic'

type TProps = {
  communityContent?: TStore
}

const CommunityContentContainer: FC<TProps> = ({ communityContent: store }) => {
  useInit(store)

  const { isMobile } = usePlatform()

  const { curThread, curCommunity, c11n, subscribedCommunitiesData } = store
  const isClassicLayout = isMobile || c11n.bannerLayout === C11N.CLASSIC

  return (
    <Fragment>
      {isClassicLayout ? (
        <ClassicLayout thread={curThread} />
      ) : (
        <HolyGrailLayout
          thread={curThread}
          community={curCommunity}
          subscribedCommunities={subscribedCommunitiesData}
        />
      )}
    </Fragment>
  )
}

export default pluggedIn(CommunityContentContainer) as FC<TProps>
