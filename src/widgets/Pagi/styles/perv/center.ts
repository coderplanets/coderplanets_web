import styled from 'styled-components'

import css from '@/utils/css'

import { CommonNavi, CommonHint, CommonCenterArrowIcon } from '../index'

export const Wrapper = styled.div<{ disabled?: boolean }>`
  ${css.flex('align-center')};
  color: #196780;

  opacity: ${({ disabled }) => (disabled ? '0.6' : '1')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`
export const ArrowWrapper = styled.div`
  position: relative;
`
export const Icon = styled(CommonCenterArrowIcon)`
  transform: rotate(180deg);
  ${Wrapper}:hover & {
    fill: #327faf;
  }
`

export const NaviInfo = styled.div<{ disabled?: boolean }>`
  ${css.flexColumn('align-center')};
  margin-left: 10px;
  ${Wrapper}:hover & {
    margin-left: ${({ disabled }) => (disabled ? '10px' : '8px')};
  }

  ${css.media.mobile`
    margin-left: 5px;
  `}
`
export const Navi = styled(CommonNavi)``
export const Hint = styled(CommonHint)``
