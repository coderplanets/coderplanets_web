import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'

export const FilterWraper = styled.div`
  margin-right: 8px;
  margin-top: 8px;
  display: ${({ show }) => (show ? 'block' : 'none')};
  ${css.smokey};

  ${css.media.mobile`
    margin-right: 0;
    margin-top: 2px;
  `};
`
export const Header = styled.div`
  ${css.flex('align-center')};
  color: ${theme('comment.title')};

  ${css.media.mobile`
    font-size: 13px;
  `};
`
export const FilterIcon = styled(Img)`
  fill: ${theme('comment.title')};
  margin-right: 3px;
  width: 20px;
  height: 20px;
  display: block;
  transform: ${({ reverse }) => (reverse ? 'rotate(180deg)' : '')};
  ${css.media.mobile`
    width: 15px;
    height: 15px;
  `};
`
export const RecentlyIcon = styled(FilterIcon)``
export const MenuWrapper = styled.div`
  ${css.flexColumn('align-center')};
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
