/*
 *
 * CommunityContent
 *
 */

import { FC, Fragment } from 'react'

import { C11N } from '@/constant'
import { useDevice } from '@/hooks'
import { pluggedIn, buildLog } from '@/utils'

import ClassicLayout from './ClassicLayout'
import HolyGrailLayout from './HolyGrailLayout'

import type { TStore } from './store'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CommunityContent')

type TProps = {
  communityContent?: TStore
}

const CommunityContentContainer: FC<TProps> = ({ communityContent: store }) => {
  useInit(store)
  const { isMobile } = useDevice()

  const {
    curThread,
    curCommunity,
    accountInfo: {
      customization: { bannerLayout },
    },
    subscribedCommunitiesData,
  } = store

  const isClassicLayout = !isMobile && bannerLayout === C11N.CLASSIC

  // console.log('subscribedCommunitiesData ->> ', subscribedCommunitiesData)

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
