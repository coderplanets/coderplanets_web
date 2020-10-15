import styled from 'styled-components'

import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex()};
`
export const LeftPart = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`
export const RightPart = styled.div`
  ${css.flexGrow('align-both')};

  border-left: 2px solid;
  border-color: ${theme('drawer.divider')};
`
export const RightWrapper = styled.div`
  ${css.flex()};
  height: 100%;
`
export const NumberDivider = styled.div`
  border-left: 1px solid;
  border-color: ${theme('drawer.divider')};
  margin-left: 10px;
  margin-right: 10px;
  opacity: 0.5;
`
export const AchieveWrapper = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
`
