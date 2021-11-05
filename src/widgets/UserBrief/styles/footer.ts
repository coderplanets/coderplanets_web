import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  color: ${theme('thread.articleDigest')};
`
export const Section = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 7px;
`
export const Text = styled.div`
  font-size: 11px;
  color: ${theme('thread.articleDigest')};
  margin-right: 5px;
  opacity: 0.8;
`
export const Desc = styled.div`
  color: ${theme('thread.articleTitle')};
`
export const Num = styled.div`
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
`
export const JoinAt = styled(Num)`
  ${css.flex('align-both')};
  position: relative;
  font-size: 12px;
`
export const JoinSlash = styled.div`
  font-size: 10px;
  color: ${theme('thread.articleDigest')};
  font-weight: bolder;
  font-family: monospace;
  margin-right: 3px;
  margin-left: 3px;
  opacity: 0.6;
  transform: rotate(-5deg);
  margin-top: 1px;
`
