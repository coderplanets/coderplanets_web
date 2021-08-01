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
  return <div>hello</div>
  // useInit(store)

  // const isMobile = false
  // const { isMobile } = usePlatform()

  // const {
  //   curThread,
  //   curCommunity,
  //   accountInfo: {
  //     customization: { bannerLayout },
  //   },
  //   subscribedCommunitiesData,
  // } = store

  // const isClassicLayout = !isMobile && bannerLayout === C11N.CLASSIC

  // return (
  //   <Fragment>
  //     {isClassicLayout ? (
  //       <div>i</div>
  //     ) : (
  //       // <ClassicLayout thread={curThread} />
  //       <div>i</div>
  //       // <HolyGrailLayout
  //       //   thread={curThread}
  //       //   community={curCommunity}
  //       //   subscribedCommunities={subscribedCommunitiesData}
  //       // />
  //     )}
  //   </Fragment>
  // )
}

// export default pluggedIn(CommunityContentContainer) as FC<TProps>
export default CommunityContentContainer as FC<TProps>
