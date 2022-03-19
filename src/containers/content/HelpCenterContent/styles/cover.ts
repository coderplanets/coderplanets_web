import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  background: ${theme('thread.bg')};
  padding: 60px 30px;
  padding-right: 10px;
`
export const ContentWrapper = styled.div`
  ${css.flex()};
  flex-wrap: wrap;
`
