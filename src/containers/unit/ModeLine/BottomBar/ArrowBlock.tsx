import { FC } from 'react'

import Link from 'next/link'

import type { TCommunity } from '@/spec'
import { ICON } from '@/config'
import { ROUTE } from '@/constant'

import CommunityInfo from './CommunityInfo'

import {
  MenuWrapper,
  CommunityWrapper,
  ExploreWrapper,
  AccountWrapper,
  HomeLogo,
  UserLogo,
  ExploreLogo,
  ArrowShape,
  MenuArrowShape,
  ArrowShapeLeft,
} from '../styles/bottom_bar/arrow_block'

type TMenuBlock = {
  onClick: () => void
}
export const MenuBlock: FC<TMenuBlock> = ({ onClick }) => {
  const bgColor = '#071f27'

  return (
    <MenuWrapper bgColor={bgColor} onClick={onClick}>
      <HomeLogo />
      <MenuArrowShape bgColor={bgColor} />
    </MenuWrapper>
  )
}

type TCommunityBlock = {
  community: TCommunity
  isExpand: boolean
  isArticle?: boolean
  onClick: () => void
}

export const CommunityBlock: FC<TCommunityBlock> = ({
  community,
  isExpand,
  isArticle = false,
  onClick,
}) => {
  const bgColor = '#194d5f'
  const activeBgColor = '#196f70'

  const { viewerHasSubscribed } = community

  return (
    <CommunityWrapper
      bgColor={viewerHasSubscribed ? activeBgColor : bgColor}
      onClick={() => onClick()}
    >
      <CommunityInfo
        community={community}
        isExpand={isExpand}
        isArticle={isArticle}
      />
      <ArrowShape bgColor={viewerHasSubscribed ? activeBgColor : bgColor} />
    </CommunityWrapper>
  )
}

export const ExploreBlock: FC = () => {
  const bgColor = '#071f27'

  return (
    <Link href={ROUTE.EXPLORE}>
      <ExploreWrapper bgColor={bgColor}>
        <ArrowShapeLeft bgColor={bgColor} />
        <ExploreLogo src={`${ICON}/discover.svg`} />
      </ExploreWrapper>
    </Link>
  )
}

export const AccountBlock: FC = () => {
  const bgColor = '#013B49'

  return (
    <AccountWrapper bgColor={bgColor}>
      <ArrowShapeLeft bgColor={bgColor} />
      <UserLogo />
    </AccountWrapper>
  )
}
