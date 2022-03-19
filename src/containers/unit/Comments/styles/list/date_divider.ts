import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  padding-top: 15px;
  margin-left: 30px;
`
export const SlashSign = styled.div`
  font-size: 10px;
  font-weight: bolder;
  font-family: monospace;
  margin-right: 10px;
  margin-left: 6px;
  opacity: 0.8;
`
export const DateText = styled.div`
  font-size: 12px;
  opacity: 0.8;
`
