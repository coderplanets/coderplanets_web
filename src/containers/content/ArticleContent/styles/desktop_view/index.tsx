import styled from 'styled-components'

import type { TTestable, TMetric } from '@/spec'
import css from '@/utils/css'
import { theme } from '@/utils/themes'
import { WIDTH } from '@/utils/css/metric'

export const Wrapper = styled.article.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexGrow('justify-center')};
  position: relative;
  padding-top: 20px;
  min-height: 300px;
  max-width: ${WIDTH.ARTICLE.PAGE};
  width: 100%;

  ${css.media.tablet`
    padding: 8px 0;
  `};
`
export const InnerWrapper = styled.div`
  ${css.flex()};
  width: 100%;
  padding-left: 0;
  padding-right: 0;
`
export const MainWrapper = styled.div<{ metric: TMetric }>`
  flex-grow: 1;
  ${({ metric }) => css.fitContentWidth(metric)};
`
export const SidebarWrapper = styled.div``
/* background: ${theme('drawer.articleBg')}; */
export const ArticleWrapper = styled.div`
  font-size: 15px;
  /* background: ${theme('drawer.articleBg')}; */
  /* border-radius: 5px; */
  background: transparent;

  min-height: 200px;
`
export const BodyHeaderWrapper = styled.div`
  margin-top: -18px;
  margin-bottom: 18px;
`
export const CommentsWrapper = styled.div`
  margin-top: 50px;
`
