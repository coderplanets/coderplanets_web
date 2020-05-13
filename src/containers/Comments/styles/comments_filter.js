import styled from 'styled-components'

import Img from '@/Img'
import { theme, cs } from '@/utils'

export const FilterWraper = styled.div`
  margin-right: 8px;
  margin-top: 8px;
  display: ${({ show }) => (show ? 'block' : 'none')};
  ${cs.smokey};
`
export const Header = styled.div`
  ${cs.flex()};
  color: ${theme('comment.title')};
`

export const FilterIcon = styled(Img)`
  fill: ${theme('comment.title')};
  margin-right: 3px;
  width: 20px;
  height: 20px;
  transform: ${({ reverse }) => (reverse ? 'rotate(180deg)' : '')};
`
export const RecentlyIcon = styled(FilterIcon)``
export const MenuWrapper = styled.div`
  ${cs.flexColumn('align-center')};
  width: 80px;
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
