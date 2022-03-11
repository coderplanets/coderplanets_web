import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css, { WIDTH } from '@/utils/css'

export const Wrapper = styled.article.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexGrow('justify-center')};
  position: relative;
  padding-top: 20px;
  min-height: 300px;

  ${css.media.tablet`
    padding: 8px 0;
  `};
`
export const InnerWrapper = styled.div`
  ${css.flex()};
  width: 100%;
  padding: 0 6vw;
`
export const MainWrapper = styled.div`
  flex-grow: 1;
  max-width: ${WIDTH.ARTICLE.CONTENT};

  ${css.media.tablet`
    width: 100%;
  `};
`
/* background: ${theme('drawer.articleBg')}; */
export const ArticleWrapper = styled.div`
  font-size: 15px;
  background: transparent;
  min-height: 20vh;
  margin-right: 0;
`
export const BodyHeaderWrapper = styled.div`
  margin-top: -18px;
  margin-bottom: 18px;
`
export const CommentsWrapper = styled.div`
  margin-top: 30px;
`
