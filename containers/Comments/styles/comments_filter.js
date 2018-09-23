import styled from 'styled-components'

import Img from '../../../components/Img'
/* import { Img } from '../../../components' */
import { smokey, Animate, theme } from '../../../utils'

export const FilterWraper = styled.div`
  margin-right: 8px;
  margin-top: 8px;
  display: ${({ show }) => (show ? 'block' : 'none')};
  ${smokey};
`
export const Header = styled.div`
  display: flex;
  color: ${theme('comment.title')};
`

export const FilterIcon = styled(Img)`
  fill: ${theme('comment.title')};
  margin-right: 3px;
  width: 20px;
  height: 20px;
  transform: ${({ reverse }) => (reverse ? 'rotate(180deg)' : '')};
`
export const RecentlyIcon = FilterIcon.extend`
  animation: ${Animate.rotate360} 0.6s linear;
`
// animation: ${Animate.rotate360} 1s cubic-bezier(0, 0.56, 0.24, 0.72);
export const MenuWrapper = styled.div`
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`

export const MenuItem = styled.div`
  margin-bottom: 10px;
  color: ${({ active, type }) =>
    active === type ? theme('comment.filterActive') : theme('comment.filter')};
  &:hover {
    cursor: pointer;
    color: ${theme('comment.filterActive')};
  }
`
