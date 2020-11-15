import styled from 'styled-components'

import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex()};
  width: 100%;
`
export const Title = styled.div`
  font-size: 14px;
  color: ${theme('thread.articleTitle')};
  flex-grow: 1;
  margin-top: -4px;
`
