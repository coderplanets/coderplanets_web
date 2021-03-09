import styled from 'styled-components'

import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testid,
}))`
  ${css.flex('justify-center')};
  width: 100%;
  margin-top: 40px;
`
export const InnerWrapper = styled.div`
  ${css.flexColumn()};
  width: 100%;
  min-height: 50vh;
  ${({ metric }) => css.fitContentWidth(metric)};
  color: ${theme('thread.articleDigest')};
  /* border: 1px solid #003B49; */
`
export const ContentWrapper = styled.div`
  min-height: 50vh;
  width: 100%;
  margin: 20px 0;
`
export const Footer = styled.div`
  ${css.flex('align-center', 'justify-end')};
  width: 100%;
  border-top: 2px solid;
  border-top-color: #03343f;
  margin-top: 35px;
  margin-bottom: 40px;
  padding-top: 20px;
`
