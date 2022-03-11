import styled from 'styled-components'

import type { TMetric } from '@/spec'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn('align-center')};
  width: 100%;
  overflow-x: hidden;
`
export const InnerWrapper = styled.div<{ metric: TMetric }>`
  ${css.flex()};
  width: 100%;
  ${({ metric }) => css.fitContentWidth(metric)};

  ${css.media.mobile`
    padding: 0;
    margin: 0;
    max-width: 100%;
  `};
`
export const BannerWrapper = styled.div<{ metric: TMetric }>`
  position: relative;
  background: ${theme('banner.bg')};
  width: 100%;
  height: 145px;
  margin-bottom: 20px;
  ${({ metric }) => css.fitPageWidth(metric)};

  ${css.media.mobile`
    padding: 0;
    margin: 0;
    margin-bottom: 26px;
  `};
`
export const ContentWrapper = styled.div<{ hasContentBg: boolean }>`
  position: relative;
  flex-grow: 1;
  min-height: 600px;
  padding: 20px;
  padding-top: 15px;

  background: ${({ hasContentBg }) =>
    hasContentBg ? theme('thread.bg') : 'transparent'};

  ${css.media.mobile`
    padding: 0;
  `};
`
export const TabBarWrapper = styled.div`
  position: absolute;
  top: -66px;
  left: 15px;
  width: 100%;
`
export const MobileBottom = styled.div`
  border-top: 1px dashed;
  border-top-color: ${theme('thread.articleDigest')};
  display: none;
  ${css.media.tablet`display: block`};
`

export const PublishedCommentsWrapper = styled.div`
  margin-top: -20px;
  padding-left: 8px;
  padding-right: 20px;

  ${css.media.mobile`
    padding: 0 15px;
  `};
`
