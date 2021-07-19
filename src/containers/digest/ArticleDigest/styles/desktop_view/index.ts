import styled from 'styled-components'

import type { TTestable } from '@/spec'
import { theme, css, WIDTH } from '@/utils'

export const Wrapper = styled.nav.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn('justify-end')};
  position: relative;
  background: transparent;
  border-bottom: ${theme('banner.spliter')};
  min-height: 251px;
  margin-bottom: 15px;
  width: 100%;
  max-width: ${WIDTH.ARTICLE.PAGE};

  ${css.media.laptopL`
    min-height: 230px;
  `}
`
export const InnerWrapper = styled.div`
  ${css.flex('justify-center')};
  width: 100%;
`
export const BannerContent = styled.div`
  ${css.flex()};
  width: 100%;
`
export const Main = styled.div<{ metric: string }>`
  ${({ metric }) => css.fitContentWidth(metric)};
  width: 100%;
`
export const AuthorWrapper = styled.div`
  ${css.flex('align-start', 'justify-center')};
  width: ${WIDTH.ARTICLE.STICKER};
  margin-top: 32px;

  ${css.media.laptopL`
    width: ${WIDTH.ARTICLE.STICKER_LAPTOPL};
  `}
`
export const BottomInfo = styled.div`
  ${css.flex('align-end', 'justify-between')};
  margin-top: 15px;
  padding-bottom: 45px;
  border-bottom: 1px solid;
  border-bottom-color: #004251;
  width: 100%;
  color: ${theme('thread.articleDigest')};
`
export const AuthorName = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 13px;
`
