/*
 *
 * CommunityContent
 *
 */

import { FC } from 'react'

import { ICON_BASE } from '@/config'
import { ROUTE, C11N } from '@/constant'
import { useDevice } from '@/hooks'
import { pluggedIn, buildLog } from '@/utils'

import CommunityDigest from '@/containers/digest/CommunityDigest'
import PostsThread from '@/containers//thread/PostsThread'
import BlogsThread from '@/containers//thread/BlogsThread'
import ReposThread from '@/containers/thread/ReposThread'
import JobsThread from '@/containers/thread/JobsThread'
import UsersThread from '@/containers/thread/UsersThread'

import type { TStore } from './store'
import {
  Wrapper,
  InnerWrapper,
  TmpSubedBox,
  SubItem,
  SubIcon,
  SubTitle,
  ItemDivider,
} from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CommunityContent')

const ComunityContent = ({ curRoute }) => {
  const { subPath } = curRoute
  switch (subPath) {
    case ROUTE.REPOS:
      return <ReposThread />

    case ROUTE.BLOGS:
      return <BlogsThread />

    case ROUTE.USERS:
      return <UsersThread />

    case ROUTE.JOBS:
      return <JobsThread />

    default:
      return <PostsThread />
  }
}

type TProps = {
  communityContent?: TStore
}

const CommunityContentContainer: FC<TProps> = ({ communityContent: store }) => {
  useInit(store)
  const { isMobile } = useDevice()

  const {
    curRoute,
    accountInfo: {
      customization: { bannerLayout },
    },
  } = store

  const isClassicLayout = !isMobile && bannerLayout === C11N.DIGEST

  return (
    <Wrapper testid="community-content">
      <InnerWrapper isClassicLayout={isClassicLayout}>
        <TmpSubedBox>
          <SubTitle>我的订阅</SubTitle>
          <ItemDivider />
          <SubItem>首页</SubItem>
          <SubItem>
            <SubIcon src={`${ICON_BASE}/pl/javascript.svg`} />
            JavaScript
          </SubItem>
          <SubItem>
            <SubIcon src={`${ICON_BASE}/pl/elixir.svg`} />
            Elixir
          </SubItem>
          <SubItem>
            <SubIcon src={`${ICON_BASE}/pl/clojure.svg`} />
            神奇女侠
          </SubItem>
          <SubItem>
            <SubIcon src={`${ICON_BASE}/pl/javascript.svg`} />
            JavaScript
          </SubItem>
          <SubItem>
            <SubIcon src={`${ICON_BASE}/pl/elixir.svg`} />
            Elixir
          </SubItem>
          <SubItem>
            <SubIcon src={`${ICON_BASE}/pl/clojure.svg`} />
            神奇女侠
          </SubItem>
        </TmpSubedBox>
        <ComunityContent curRoute={curRoute} />
        <CommunityDigest />
      </InnerWrapper>
    </Wrapper>
  )
}

export default pluggedIn(CommunityContentContainer) as FC<TProps>
