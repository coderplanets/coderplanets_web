import styled from 'styled-components'

import { theme, cs } from '@utils'

export const AccountWrapper = styled.div`
  ${cs.flexColumn()};
  height: auto;
  min-height: 100vh;
  background: ${theme('preview.accountBg')};
  padding: 22px;
  padding-top: 30px;
  border-radius: 3px;
  border-top: 3px solid;
  border-top-color: ${theme('preview.topLine')};
`
export const AccountContent = styled.div`
  flex-grow: 1;
`
export const Divider = styled.div`
  margin-top: ${({ top }) => top || '10px'};
  margin-bottom: ${({ bottom }) => bottom || '10px'};
  border-bottom: 1px solid;
  border-bottom-color: ${theme('preview.divider')};
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
