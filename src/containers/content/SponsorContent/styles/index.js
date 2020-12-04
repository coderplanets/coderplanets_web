import styled from 'styled-components'

import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${css.flexColumn('align-both')}
  width: 100%;
  /* min-height: 100vh; */
  position: relative;
  background-image: ${theme('banner.linearGradient')};
`
export const InnerWrapper = styled.div`
  ${css.flexColumn('align-both')}
  padding: 10px 0;
  margin-top: 12px;
  width: 100%;
  margin-top: ${({ bannerVisiable }) => (bannerVisiable ? '40vh' : '20vh')};
  transition: margin-top 0.25s;
`
export const ContentWrapper = styled.div`
  ${css.flexColumn('align-center')};
  ${({ metric }) => css.fitContentWidth(metric)};
`
export const Footer = styled.div`
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
  opacity: 0.8;
  margin-top: 50px;
  &:before {
    content: '-';
    margin-right: 8px;
  }
  &:after {
    content: '-';
    margin-left: 8px;
  }
`
