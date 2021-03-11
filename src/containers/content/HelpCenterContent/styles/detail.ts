import styled from 'styled-components'

import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex()};
  width: 100%;
`
export const ArticleWrapper = styled.div`
  color: ${theme('thread.articleDigest')};
  width: 100%;
  padding: 30px;
  flex-grow: 1;
  background: ${theme('thread.bg')};
  min-height: 70vh;
`
export const MenuWrapper = styled.div`
  ${css.flex('justify-end')};
  width: 300px;
  margin-left: 30px;
  margin-top: 20px;
`
