import styled from 'styled-components'

import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-both', 'justify-between')};
  width: 640px;
  border-top: 2px solid;
  border-top-color: #03343f;
  padding-top: 20px;
  padding-left: 58px;
  padding-right: 58px;
  margin-top: 35px;
  margin-bottom: 60px;
`
export const FirstStepWrapper = styled.div`
  margin-top: 15px;
`
export const ArticleWrapper = styled.div`
  width: 680px;
  margin-top: 18px;
  margin-bottom: 60px;
`
export const ArticleButtons = styled.div`
  ${css.flex('align-both', 'justify-between')};
  width: 100%;
  padding-top: 25px;
  padding-left: 28px;
  padding-right: 20px;
`
export const FooterExtra = styled.div`
  ${css.flex('align-both', 'justify-between')};
  width: 100%;
  border-bottom: 4px solid;
  border-bottom-color: #03343f;
  padding-bottom: 15px;
  padding-left: 18px;
  padding-right: 20px;
`
