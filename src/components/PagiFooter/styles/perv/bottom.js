import styled from 'styled-components'

import { cs } from '@utils'

import { CommonNavi, CommonHint, CommonBottomArrowIcon } from '../index'

export const Wrapper = styled.div`
  ${cs.flex('align-end')};
  justify-content: flex-end;
  color: #196780;

  opacity: ${({ disabled }) => (disabled ? '0.6' : '1')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  width: 90px;
`
export const ArrowWrapper = styled.div`
  position: relative;
`
export const Icon = styled(CommonBottomArrowIcon)`
  ${Wrapper}:hover & {
    fill: #327faf;
  }
`
export const NaviInfo = styled.div`
  ${cs.flexColumn('align-start')};

  margin-left: 8px;
  ${Wrapper}:hover & {
    margin-left: ${({ disabled }) => (disabled ? '8px' : '14px')};
  }

  transition: all 0.25s;
`
export const Navi = styled(CommonNavi)``
export const Hint = styled(CommonHint)`
  margin-left: 5px;
`
