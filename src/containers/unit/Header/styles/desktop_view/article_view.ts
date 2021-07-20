import styled from 'styled-components'

import type { TMetric } from '@/spec'
import { css, theme, WIDTH } from '@/utils'
import Img from '@/Img'
import { Wrapper as CommunityWrapper } from './community_view'

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
export const Operations = styled.div`
  ${css.flex('align-center', 'justify-end')};
  width: ${WIDTH.ARTICLE.STICKER};

  ${css.media.laptopL`
    width: ${WIDTH.ARTICLE.STICKER_LAPTOPL};
  `}
`
export const UserInfoWrapper = styled.div``
export const MoreIcon = styled(Img)`
  fill: ${theme('banner.desc')};
  ${css.size(24)};
  cursor: pointer;
`
