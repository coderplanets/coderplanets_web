import styled from 'styled-components'

import type { TMetric } from '@/spec'
import css, { WIDTH } from '@/utils/css'
import { pixelAdd } from '@/utils/dom'

import { BaseBanner } from '../index'

const getMinHeight = (isMobile) => {
  if (isMobile) {
    return '140px'
  }

  return '116px'
}

type TWrapper = {
  isMobile: boolean
  metric?: TMetric
}
export const Wrapper = styled(BaseBanner)<TWrapper>`
  width: 100%;
  min-height: ${({ isMobile }) => getMinHeight(isMobile)};
`
export const InnerWrapper = styled.div<TWrapper>`
  ${css.flex('justify-center')};
  padding-top: 10px;
  min-height: ${({ isMobile }) => getMinHeight(isMobile)};
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
export const TabBarWrapper = styled.div`
  ${css.flex()};
  width: 100%;
  margin-left: -16px;

  ${css.media.tablet`
    padding-left: calc(2%);
  `};

  ${css.media.mobile`
    padding-left: 0;
    margin-left: -10px;
  `};
`
export const CommunityBaseInfo = styled.div`
  ${css.flex('justify-between')};
  width: 100%;
  padding-top: 20px;
  // 60 是经典布局为缩小帖子列表"视觉宽度"手动缩小的值
  padding-right: 60px;

  ${css.media.mobile`
    padding-right: 0;
  `};
`
