import styled from 'styled-components'

import type { TMetric } from '@/spec'
import css, { theme } from '@/utils/css'
import Img from '@/Img'
import { Wrapper as CommunityWrapper } from './community_view'

import { getStickerJustify } from './metric'

export const Wrapper = styled(CommunityWrapper)`
  box-shadow: none;
  justify-content: flex-start !important;
`
export const InnerWrapper = styled.div`
  ${css.flex('justify-start', 'align-center')};
  width: 100%;
  height: 33px;
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
`
export const MoreIcon = styled(Img)`
  fill: ${theme('banner.desc')};
  ${css.size(24)};
  cursor: pointer;
`
