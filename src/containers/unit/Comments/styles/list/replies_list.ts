import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  margin-left: 8px;
`
export const CountHint = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
  margin-left: 23px;
  margin-top: 10px;
  opacity: 0.8;
`
export const SlashSign = styled.div`
  font-size: 11px;
  font-weight: bolder;
  font-family: monospace;
  opacity: 0.8;
  margin-right: 8px;
`
export const CountNum = styled.div`
  color: ${theme('thread.articleTitle')};
  font-weight: bold;
  margin-right: 5px;
`

export const ListWrapper = styled.div`
  margin-left: 17.5px;
  padding-left: 4px;
`
