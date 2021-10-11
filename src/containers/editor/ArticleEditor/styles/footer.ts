import styled from 'styled-components'

import css from '@/utils/css'
import { theme } from '@/utils/themes'

export const Wrapper = styled.div`
  width: 700px;
  color: ${theme('thread.articleDigest')};
  padding-left: 5px;
`
export const ArticleFooter = styled.div`
  ${css.flex('align-center', 'justify-between')};
  width: 100%;
  border-bottom: 3px solid;
  border-bottom-color: #1a3a40;
  margin-bottom: 28px;
  padding-left: 27px;
  padding-right: 34px;
  padding-bottom: 25px;
`
export const PublishFooter = styled.div`
  ${css.flex('align-center', 'justify-between')};
  width: 100%;
  padding-left: 26px;
  padding-right: 35px;
`
