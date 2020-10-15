import styled from 'styled-components'

import { css } from '@/utils'

import { CommonNavi, CommonHint, CommonCenterArrowIcon } from '../index'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  color: #196780;

  opacity: ${({ disabled }) => (disabled ? '0.6' : '1')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`
export const ArrowWrapper = styled.div`
  position: relative;
`
export const Icon = styled(CommonCenterArrowIcon)`
  ${Wrapper}:hover & {
    fill: #327faf;
  }
`
export const NaviInfo = styled.div`
  ${css.flexColumn('align-center')};
  margin-right: 10px;

  ${Wrapper}:hover & {
    margin-right: ${({ disabled }) => (disabled ? '10px' : '8px')};
  }
  transition: all 0.25s;
`
export const Navi = styled(CommonNavi)``
export const Hint = styled(CommonHint)``
