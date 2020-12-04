import styled from 'styled-components'

import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${css.flexColumn('align-both')}
  width: 100%;
  min-height: 70vh;
  margin-bottom: 50px;
  background-image: ${theme('banner.linearGradient')};
`
export const InnerWrapper = styled.div`
  ${css.flexColumn('align-both')}
  ${({ metric }) => css.fitContentWidth(metric)};
  padding: 10px 0;
  margin-top: 12px;
  width: 100%;
`
export const ContentWrapper = styled.div`
  ${css.flexColumnGrow()};
  max-width: 100%;
`
export const Title = styled.h3`
  color: ${theme('thread.articleTitle')};
`
export const FriendsWrapper = styled.div`
  ${css.flex('justify-center')};
  margin-left: 60px;
`
export const Footer = styled.div`
  margin-top: 120px;
  color: #0a6488;
  margin-left: 18px;
`
export const Divider = styled.div`
  width: ${({ width }) => width || '60px'};
  height: 1px;
  background-color: ${theme('thread.articleDigest')};
  margin-top: 10px;
  margin-bottom: 8px;
  opacity: 0.6;
`
