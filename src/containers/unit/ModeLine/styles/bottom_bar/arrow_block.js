import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const MenuLogo = styled(Img)`
  fill: ${({ active }) => (active ? '#2ca1a2' : theme('thread.articleTitle'))};
  ${css.size(12)};
  display: block;
`
export const SiteLogo = styled(MenuLogo)`
  width: 15px;
  height: 15px;
  margin-top: -1px;
`
export const ExploreLogo = styled(Img)`
  fill: ${({ active }) => (active ? '#2ca1a2' : theme('thread.articleTitle'))};
  ${css.size(14)};
  display: block;
`
const Block = styled.div`
  position: relative;
  ${css.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  height: 100%;
  background: ${({ bgColor }) => bgColor};
  padding-left: 10px;
`
export const ArrowShape = styled.div`
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
  padding-left: 10px;
  padding-right: 6px;
`
export const CommunityWrapper = styled(Block)`
  padding-left: 18px;
  padding-right: 0;
`
export const ExploreWrapper = styled(Block)`
  padding-left: 8px;
  padding-right: 15px;
`
export const AccountWrapper = styled(Block)`
  padding-left: 6px;
  padding-right: 10px;
`
export const MenuArrowShape = styled(ArrowShape)`
  right: -6px;
  border-left: 6px solid;
  border-left-color: ${({ bgColor }) => bgColor};
`
export const ArrowShapeLeft = styled(ArrowShape)`
  left: -6px;
  border-left: 6px solid;
  border-left-color: ${({ bgColor }) => bgColor};
  transform: rotate(180deg);
`
