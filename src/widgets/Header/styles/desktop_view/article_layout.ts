import styled from 'styled-components'
import { METRIC } from '@/constant'

import type { TMetric } from '@/spec'
import css, { theme } from '@/utils/css'
import Img from '@/Img'
import { Wrapper as CommunityWrapper } from './community_layout'

import { getStickerJustify } from './metric'

export const Wrapper = styled(CommunityWrapper)`
  box-shadow: none;
  justify-content: flex-start !important;
`
export const InnerWrapper = styled.div`
  ${css.flex('justify-start', 'align-center')};
  width: 100%;
  height: 50px;
  /* border-bottom: 1px solid;
  border-bottom-color: ${theme('border')}; */
`
export const RouterWrapper = styled.div<{ metric: TMetric }>`
  ${css.flex('align-center')};
  width: 100%;
  height: 100%;
  ${({ metric }) => css.fitContentWidth(metric)};
`
export const Operations = styled.div<{ metric: TMetric }>`
  ${css.flex('align-center')};
  justify-content: ${({ metric }) => getStickerJustify(metric)};
  ${({ metric }) => css.fitStickerWidth(metric)};

  padding-right: ${({ metric }) =>
    metric === METRIC.WORKS_ARTICLE ? '28px' : 0};
`
export const LoginHint = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 13px;
  margin-top: 1px;

  &:hover {
    color: ${theme('button.primary')};
    cursor: pointer;
  }
`
export const MoreIcon = styled(Img)`
  fill: ${theme('banner.desc')};
  ${css.size(24)};
  cursor: pointer;
`
