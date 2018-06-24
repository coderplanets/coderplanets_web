import styled from 'styled-components'

import { theme } from '../../../utils'

export const AccountWrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  background: ${theme('preview.accountBg')};
  padding: 22px;
  padding-top: 30px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  border-top: 2px solid orange;
`
export const AccountContent = styled.div`
  flex-grow: 1;
`
export const Divider = styled.div`
  margin-top: ${props => (props.top ? props.top : '10px')};
  margin-bottom: ${props => (props.bottom ? props.bottom : '10px')};
  border-bottom: 1px solid;
  border-bottom-color: ${theme('preview.accountDivider')};
`
export const ThemeWrapper = styled.div`
  margin-bottom: 15px;
`

export const PanerWrapper = styled.div`
  border: 1px solid;
  border-color: ${theme('tabs.border')};
  border-top: none;
  margin-top: -16px;
  min-height: 260px;
  padding: 12px;
  background: ${theme('tabs.contentBg')};
`
