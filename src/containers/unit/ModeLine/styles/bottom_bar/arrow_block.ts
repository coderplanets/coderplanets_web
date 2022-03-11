import styled from 'styled-components'

import type { TActive } from '@/spec'
import Img from '@/Img'
import css, { theme } from '@/utils/css'

import SiteLogo from '@/icons/CPLogo'
import UserSVG from '@/icons/User'

export const MenuLogo = styled(Img)<TActive>`
  fill: ${({ active }) => (active ? '#2ca1a2' : theme('thread.articleTitle'))};
  ${css.size(12)};
`
export const UserLogo = styled(UserSVG)`
  ${css.size(14)};
  fill: ${theme('thread.articleDigest')};
`
export const HomeLogo = styled(SiteLogo)`
  fill: ${theme('button.primary')};
  ${css.size(16)};
  margin-top: -1px;
  margin-left: 2px;
`
export const ExploreLogo = styled(Img)<TActive>`
  fill: ${({ active }) => (active ? '#2ca1a2' : theme('thread.articleTitle'))};
  ${css.size(14)};
`
const Block = styled.div<{ bgColor: string }>`
  position: relative;
  ${css.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  height: 100%;
  background: ${({ bgColor }) => bgColor};
  padding-left: 10px;
`
export const ArrowShape = styled.div<{ bgColor: string }>`
  position: absolute;
  right: -10px;
  width: 0;
  height: 0;
  border-top: 14px solid transparent;
  border-bottom: 14px solid transparent;
  border-left: 10px solid;
  border-left-color: ${({ bgColor }) => bgColor};
  z-index: 1;
`
export const MenuWrapper = styled(Block)`
  padding-left: 15px;
  padding-right: 12px;
`
export const CommunityWrapper = styled(Block)`
  padding-left: 18px;
  padding-right: 0;
`
export const ExploreWrapper = styled(Block)`
  padding-left: 12px;
  padding-right: 18px;
`
export const AccountWrapper = styled(Block)`
  padding-left: 10px;
  padding-right: 15px;
`
export const MenuArrowShape = styled(ArrowShape)<{ bgColor: string }>`
  right: -6px;
  border-left: 6px solid;
  border-left-color: ${({ bgColor }) => bgColor};
`
export const ArrowShapeLeft = styled(ArrowShape)<{ bgColor: string }>`
  left: -6px;
  border-left: 6px solid;
  border-left-color: ${({ bgColor }) => bgColor};
  transform: rotate(180deg);
`
