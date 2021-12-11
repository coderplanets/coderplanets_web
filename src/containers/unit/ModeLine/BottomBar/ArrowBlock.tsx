import { FC } from 'react'

import type { TCommunity } from '@/spec'
import { ICON } from '@/config'
import { TYPE } from '@/constant'

import CommunityInfo from './CommunityInfo'
import MainBlockInfo from './MainBlockInfo'

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
import { openMenu } from '../logic'

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

export const MainBlock: FC = () => {
  const bgColor = '#194d5f'

  return (
    <CommunityWrapper bgColor={bgColor}>
      <MainBlockInfo />
      <ArrowShape bgColor={bgColor} />
    </CommunityWrapper>
  )
}

export const ExploreBlock: FC = () => {
  const bgColor = '#071f27'

  return (
    <ExploreWrapper
      bgColor={bgColor}
      onClick={() => openMenu(TYPE.MM_TYPE.EXPLORE)}
    >
      <ArrowShapeLeft bgColor={bgColor} />
      <ExploreLogo src={`${ICON}/discover.svg`} />
    </ExploreWrapper>
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
