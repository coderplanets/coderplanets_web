import styled from 'styled-components'

import type { TMetric } from '@/spec'
import css, { theme } from '@/utils/css'
import Img from '@/Img'

export const Wrapper = styled.div<{ metric: TMetric }>`
  ${css.flex('justify-center')};
  width: 100%;
  height: 100px;
  background: ${theme('banner.bg')};
  ${({ metric }) => css.fitPageWidth(metric)};
`
export const InnerWrapper = styled.div<{ metric: TMetric }>`
  ${css.flex('align-center')};
  width: 100%;
  height: 100%;
  ${({ metric }) => css.fitContentWidth(metric)};

  /* tmp */
  padding-left: 10px;
  color: ${theme('thread.articleTitle')};
  font-size: 18px;
`
export const BreadCrumbs = styled.div`
  ${css.flex('align-center')};
`
export const Community = styled.div`
  ${css.flex('align-center')};
`
export const CommunityLogo = styled(Img)`
  ${css.size(28)};
  margin-right: 12px;
`
export const CommunityTitle = styled.a`
  color: ${theme('banner.desc')};
  text-decoration: none;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`
export const Slash = styled.div`
  color: ${theme('banner.desc')};
  margin-left: 8px;
  margin-right: 8px;
`
export const HelpTitle = styled.div`
  color: ${theme('banner.title')};
  font-weight: bold;
  font-size: 16px;
`
