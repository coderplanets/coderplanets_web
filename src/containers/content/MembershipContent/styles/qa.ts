import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css, { theme } from '@/utils/css'
import Img from '@/Img'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn('align-start')};
  margin-top: 80px;

  ${css.media.mobile`
    width: 100%;
    padding: 0 30px;
  `};
`
export const Icon = styled(Img)`
  ${css.size(26)};
  fill: ${theme('thread.articleTitle')};
  margin-right: 10px;
`
export const Header = styled.div`
  ${css.flex('align-center')};
  font-size: 18px;
  color: ${theme('thread.articleTitle')};
  border-bottom: 1px solid;
  border-bottom-color: #004758;
  padding-bottom: 5px;
  margin-bottom: 30px;
`
export const Content = styled.div`
  width: 540px;
  min-height: 200px;

  ${css.media.mobile`
    width: 100%;
  `};
`
export const QTitle = styled.div`
  font-size: 16px;
  color: ${theme('thread.articleTitle')};
  margin-bottom: 15px;
`
export const ABody = styled.div`
  font-size: 14px;
  color: ${theme('thread.articleDigest')};
  margin-bottom: 30px;
  line-height: 1.6;
`
export const Ul = styled.ul`
  list-style: disc;
  margin-left: 16px;
`
export const Li = styled.li`
  margin-bottom: 3px;
  line-height: 1.6;
`
export const Bold = styled.span`
  color: ${theme('thread.articleTitle')};
  font-weight: bold;
`
