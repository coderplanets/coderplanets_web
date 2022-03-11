import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  color: ${theme('thread.articleDigest')};
`
export const Section = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 7px;
`
export const Text = styled.div`
  ${css.flex('align-center')};
  font-size: 12px;
  color: ${theme('thread.articleDigest')};
`
export const Num = styled.div`
  font-size: 12px;
  color: ${theme('thread.articleDigest')};
  margin-left: 5px;
  margin-right: 5px;
`
