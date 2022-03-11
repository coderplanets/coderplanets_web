import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  width: 700px;
  color: ${theme('thread.articleDigest')};
`
export const ArticleFooter = styled.div`
  ${css.flex('align-center')};
  padding-bottom: 25px;
  border-bottom: 3px solid;
  border-bottom-color: #1a3a40;
  margin-top: 40px;
  margin-bottom: 28px;
  padding-left: 8px;
`
export const PublishFooter = styled.div`
  ${css.flex('align-center', 'justify-between')};
  width: 100%;
  padding-left: 5px;
  padding-right: 35px;
`
