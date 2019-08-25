import styled from 'styled-components'

import { theme, cs } from '@utils'
import Img from '@Img'

export const Wrapper = styled.div`
  // margin-bottom: ${({ pin }) => (pin ? '0' : '20px')};
  margin-top: -20px;
  background: ${theme('sidebar.bg')};
  box-shadow: -1px -4px 4px 0px rgba(0,0,0,0.2);
  border-top: 1px dashed #316d7b;
  z-index: 1;
`
export const InnerWrapper = styled.div`
  height: 5vh;
  color: wheat;
  ${cs.flex('align-both')};
`
export const SettingIcon = styled(Img)`
  fill: ${theme('sidebar.menuLink')};
  width: 16px;
  height: 16px;
`
