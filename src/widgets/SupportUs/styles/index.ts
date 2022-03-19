import styled from 'styled-components'

import type { TTestable, TMetric } from '@/spec'

import css, { theme } from '@/utils/css'
import Img from '@/Img'
import Button from '@/widgets/Buttons/Button'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn('align-center', 'justify-start')}
  width: 100%;
  min-height: 100vh;
  background-image: ${theme('banner.linearGradient')};
`
export const InnerWrapper = styled.div<{ metric: TMetric }>`
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
export const SupportLogo = styled(Img)`
  ${css.size(28)};
  transform: rotate(-12deg);
  margin-right: 12px;
  filter: saturate(0.7);
`
export const Title = styled.h1`
  ${css.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  font-size: 24px;
  margin-top: 8%;
`
export const Divider = styled.div`
  width: 120px;
  height: 1px;
  background-color: ${theme('thread.articleDigest')};
  margin-top: 18px;
  margin-bottom: 30px;
  margin-left: 5px;
  opacity: 0.6;
`
export const Desc = styled.div<{ align?: boolean }>`
  color: ${theme('thread.articleDigest')};
  text-align: ${({ align }) => (align ? 'center' : 'left')};
  font-size: 16px;
  width: 67%;
  line-height: 1.875;
`
export const MainDesc = styled(Desc)`
  text-indent: 32px;
`
export const ButtonGroup = styled.div`
  ${css.flexColumn('align-center')};
`
export const Link = styled.a`
  text-decoration: none;
`
export const FeedButton = styled(Button)`
  color: ${theme('thread.articleTitle')};
  width: 100px;
  height: 40px;
  margin-top: 5px;

  &:hover {
    color: #139c9e;
  }
`
export const AifadianButton = styled(Button)`
  ${css.flex('align-both')};
  width: 200px;
  height: 40px;
  background: linear-gradient(90deg, #946ce6, #7e5fd9);
  border: none;
  color: #fbfafe;
  border-radius: 15px;
`
export const FocusDesc = styled.div`
  color: ${theme('thread.articleDigest')};
  text-align: center;
  padding-left: 10px;
  font-size: 16px;
  line-height: 1.88;
`
export const SocialWrapper = styled.div`
  ${css.flex('align-center')};
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 15px;
`
export const SocialIcon = styled(Img)`
  ${css.size(24)};
  margin-right: 15px;
  filter: saturate(0.6);

  &:hover {
    filter: saturate(0.9);
    cursor: pointer;
  }
`
