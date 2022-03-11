import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn('align-start', 'justify-center')};
  width: 100%;
  min-height: 500px;
  color: ${theme('thread.articleDigest')};
  padding: 20px 0;
  margin-top: 30px;
`
export const ContentWrapper = styled.div`
  ${css.flexColumn('align-center', 'justify-start')};
  width: 100%;
  min-height: 300px;
  margin-top: 10px;
  margin-bottom: 30px;
`

export const ThxTitle = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 20px;
  margin-bottom: 15px;
`
export const ThxDesc = styled.div`
  width: 80%;
  text-align: center;
  color: ${theme('thread.articleDigest')};
  opacity: 0.9;
  font-size: 15px;
`
export const FeedBacks = styled.div`
  ${css.flex('align-center')};
  margin-top: 20px;
`
export const FeedLink = styled.a`
  font-size: 14px;
  color: #139c9e;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #139c9e;
    cursor: pointer;
  }
`
export const NextWrapper = styled.div`
  ${css.flexColumn('align-center', 'justify-between')};
  background: #08303c;
  border-radius: 8px;
  width: 90%;
  height: auto;
  margin-top: 70px;
  padding-bottom: 20px;
`
export const NextTitle = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 15px;
`
export const NextDesc = styled.div`
  text-align: center;
  color: ${theme('thread.articleDigest')};
  font-size: 15px;
  width: 80%;
`
export const NextButtons = styled.div`
  margin-top: 40px;
  ${css.flex('align-center')};
`
