import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn()};
`
export const Title = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  margin-bottom: 16px;
`
