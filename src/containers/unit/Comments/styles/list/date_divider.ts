import styled from 'styled-components'

import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  padding-top: 12px;
  padding-bottom: 10px;
`
export const SlashSign = styled.div`
  font-size: 10px;
  font-weight: bolder;
  font-family: cursive;
  margin-right: 10px;
  margin-left: 6px;
  opacity: 0.8;
`
export const DateText = styled.div`
  font-size: 12px;
  opacity: 0.8;
`
