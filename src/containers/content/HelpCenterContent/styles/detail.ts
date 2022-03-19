import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex()};
  width: 100%;
`
export const ContentWrapper = styled.div`
  width: 100%;
  background: ${theme('thread.bg')};
  flex-grow: 1;
`
export const ArticleWrapper = styled.div`
  color: ${theme('thread.articleDigest')};
  padding: 30px;
  width: 100%;
  min-height: 70vh;
`
export const MenuWrapper = styled.div`
  ${css.flex('justify-end')};
  width: 300px;
  margin-left: 30px;
  margin-top: 20px;
`
