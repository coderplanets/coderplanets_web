import styled from 'styled-components'

import Img from '@/components/Img'
import { cs, theme } from '@/utils'

export const MenuLogo = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  width: 12px;
  height: 12px;
  display: block;
`
const Block = styled.div`
  position: relative;
  ${cs.flex('align-center')};
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
  padding-left: 12px;
  padding-right: 6px;
`
export const CommunityWrapper = styled(Block)`
  padding-left: 20px;
  padding-right: 6px;
`
export const AccountWrapper = styled(Block)`
  padding-left: 8px;
  padding-right: 12px;
`
export const ArrowShapeLeft = styled(ArrowShape)`
  left: -10px;
  transform: rotate(180deg);
`
