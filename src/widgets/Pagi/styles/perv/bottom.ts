import styled from 'styled-components'

import css from '@/utils/css'

import { CommonNavi, CommonHint, CommonBottomArrowIcon } from '../index'

export const Wrapper = styled.div<{ disabled?: boolean }>`
  ${css.flex('align-end', 'justify-end')};
  color: #196780;

  opacity: ${({ disabled }) => (disabled ? '0.6' : '1')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  width: 90px;

  ${css.media.mobile`
    width: auto;
  `};
`
export const ArrowWrapper = styled.div`
  position: relative;
`
export const Icon = styled(CommonBottomArrowIcon)`
  ${Wrapper}:hover & {
    fill: #327faf;
  }
`
export const NaviInfo = styled.div<{ disabled?: boolean }>`
  ${css.flexColumn('align-start')};
  margin-left: 8px;

  ${Wrapper}:hover & {
    margin-left: ${({ disabled }) => (disabled ? '8px' : '14px')};
  }

  transition: all 0.2s;

  ${css.media.mobile`
    margin-left: 5px;
  `};
`
export const Navi = styled(CommonNavi)``
export const Hint = styled(CommonHint)`
  margin-left: 5px;
`
