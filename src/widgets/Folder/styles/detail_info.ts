import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn('align-start')};
  padding: 10px;
`
export const Title = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 10px;
  margin-bottom: 2px;
`
export const Desc = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 12px;
  margin-bottom: 6px;
`
