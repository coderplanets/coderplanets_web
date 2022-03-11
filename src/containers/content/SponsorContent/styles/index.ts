import styled from 'styled-components'

import type { TTestable, TMetric } from '@/spec'
import css, { theme } from '@/utils/css'
import Img from '@/Img'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn('align-both')}
  width: 100%;
  /* min-height: 100vh; */
  position: relative;
  background-image: ${theme('banner.linearGradient')};
`
export const InnerWrapper = styled.div<{ bannerVisiable: boolean }>`
  ${css.flexColumn('align-both')}
  padding: 10px 0;
  margin-top: 12px;
  width: 100%;
  margin-top: ${({ bannerVisiable }) => (bannerVisiable ? '40vh' : '20vh')};
  transition: margin-top 0.25s;
`
export const ContentWrapper = styled.div<{ metric: TMetric }>`
  ${css.flexColumn('align-center')};
  ${({ metric }) => css.fitContentWidth(metric)};
`
export const DonateTitle = styled.div`
  font-size: 14px;
  color: ${theme('thread.articleDigest')};
  opacity: 0.8;
  margin-top: 50px;
  padding: 0 40px;
  text-align: center;
  &:before {
    content: '-';
    margin-right: 8px;
  }
  &:after {
    content: '-';
    margin-left: 8px;
  }
`
export const DonateWrapper = styled.div`
  ${css.flex('justify-center')};
  flex-wrap: wrap;
  margin-top: 40px;
  padding: 0 40px;
`
export const RealDonateAvatar = styled(Img)`
  ${css.circle(30)};
  margin-right: 15px;
`
export const DonateAvatar = styled.div`
  color: ${theme('thread.articleDigest')};
  ${css.circle(30)};
  ${css.flex('align-both')};
  margin-right: 15px;
  margin-bottom: 15px;
  background: #0c3744;
`
