import styled from 'styled-components'

import type { TTestable } from '@/spec'
import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  padding: 32px 80px;
  padding-right: 85px;
`
export const ArticleWrapper = styled.div`
  padding: 0 8px;
`
export const BodyWrapper = styled.div`
  ${css.flexColumn()};
  padding: 20px;
  min-height: 400px;
  margin-top: 5px;
  margin-left: 4%;
  margin-right: 4%;
  border-radius: 3px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
`
export const CommentsWrapper = styled.div`
  min-height: 400px;
  margin-top: 32px;
  border-radius: 5px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 25px;
`
export const ArticleBody = styled.article`
  padding: 20px;
  font-size: 1.2em;
  line-height: 2em;
  flex-grow: 1;
`
export const Footer = styled.div`
  ${css.flex('align-both')};
`
