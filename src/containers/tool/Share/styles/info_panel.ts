import styled from 'styled-components'

import { theme } from '@/utils'

import { getInfoPanelHeight } from './metric'

export const Wrapper = styled.div<{ type: string }>`
  padding: 20px 40px;
  width: 100%;
  height: ${({ type }) => getInfoPanelHeight(type)};
  background: #0a313e;
  color: ${theme('thread.articleTitle')};
  transition: all 0.1s;
`
export const holder = 1
