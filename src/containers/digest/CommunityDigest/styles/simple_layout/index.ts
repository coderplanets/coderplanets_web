import styled from 'styled-components'

import type { TMetric } from '@/spec'
import css, { WIDTH } from '@/utils/css'
import { pixelAdd } from '@/utils/dom'

import { BaseBanner } from '../index'

type TWrapper = {
  metric?: TMetric
}
export const Wrapper = styled(BaseBanner)<TWrapper>`
  width: 100%;
  min-height: 65px;
`
export const InnerWrapper = styled.div<TWrapper>`
  ${css.flex('justify-center')};
  padding-top: 10px;
  min-height: 65px;
  width: 100%;
  // if use margin-left will cause horizontal scrollbar
  // 70 是经典布局为缩小帖子列表"视觉宽度"手动缩小的值
  padding-left: ${pixelAdd(WIDTH.COMMUNITY.CONTENT_OFFSET, 70)};
  ${({ metric }) => css.fitPageWidth(metric)};
  transition: min-height 0.25s;

  ${css.media.mobile`
     padding-left: 0;
  `};
`
export const BaseBannerContent = styled.div`
  ${css.flexColumn('align-center')};
  width: 100%;
  max-width: ${WIDTH.COMMUNITY.CONTENT};

  ${css.media.mobile`
    padding-left: 6%;
    padding-right: 5.5%;
  `};
`
export const BannerContentWrapper = styled(BaseBannerContent)`
  ${css.flexColumn('justify-between')};
  align-items: 'center';
`
export const BannerContainer = styled(BaseBanner)`
  /* min-height: 125px; */
`
export const CommunityBaseInfo = styled.div`
  ${css.flex('justify-between', 'align-center')};
  width: 100%;
  padding-top: 10px;
  // 60 是经典布局为缩小帖子列表"视觉宽度"手动缩小的值
  padding-right: 60px;
`
