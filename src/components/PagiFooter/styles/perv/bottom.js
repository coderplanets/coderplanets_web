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
  margin-right: 15px;
`
export const Icon = styled(CommonBottomArrowIcon)`
  ${Wrapper}:hover & {
    fill: #327faf;
  }
`
export const NaviInfo = styled.div`
  ${cs.flexColumn('align-start')};
`
export const Navi = styled(CommonNavi)``
export const Hint = styled(CommonHint)`
  margin-left: 5px;
`
