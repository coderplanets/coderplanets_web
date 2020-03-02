import styled from 'styled-components'

import { cs } from '@utils'

import { CommonNavi, CommonHint, CommonBottomArrowIcon } from '../index'

export const Wrapper = styled.div`
  ${cs.flex('align-end')};
  color: #196780;

  opacity: ${({ disabled }) => (disabled ? '0.6' : '1')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`
export const ArrowWrapper = styled.div`
  position: relative;
`
export const Icon = styled(CommonBottomArrowIcon)`
  transform: rotate(180deg);
  ${Wrapper}:hover & {
    fill: #327faf;
  }
`
export const NaviInfo = styled.div`
  ${cs.flexColumn('align-end')};
  margin-right: 10px;

  ${Wrapper}:hover & {
    margin-right: ${({ disabled }) => (disabled ? '10px' : '8px')};
  }
  transition: all 0.25s;
`
export const Navi = styled(CommonNavi)``
export const Hint = styled(CommonHint)`
  margin-right: 4px;
`
