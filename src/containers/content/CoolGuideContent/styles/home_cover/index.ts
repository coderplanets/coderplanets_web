import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn('align-both')};
  width: 100%;
  padding-right: 2%;
  min-height: 70vh;
  margin-top: 30px;

  ${css.media.mobile`
    padding-right: 0;
    margin-top: 10px;
    align-items: flex-start;
  `};
`
export const Title = styled.div`
  font-size: 16px;
  color: ${theme('thread.articleTitle')};
  margin-bottom: 15px;
`
export const Desc = styled.div`
  font-size: 14px;
  color: ${theme('thread.articleDigest')};
`
export const Block = styled.div`
  ${css.flexColumn()};
  margin-bottom: 30px;
`
export const Ul = styled.ul`
  width: 375px;
  list-style: disc;
  color: ${theme('thread.articleDigest')};

  ${css.media.mobile`
    width: 100%;
  `};
`
export const Li = styled.li`
  margin-bottom: 8px;
  line-height: 1.6;
  font-size: 14px;
`
export const Strike = styled.span`
  text-decoration: line-through;
  margin-left: 1px;
  margin-right: 1px;
`
export const Bold = styled.span`
  color: ${theme('thread.articleTitle')};
  font-weight: bold;
`
