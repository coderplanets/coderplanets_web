import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn('align-start', 'justify-start')};
  width: auto;
  height: 100%;
  padding: 10px;
  margin: 20px;
  margin-top: 10px;
  margin-left: 40px;
  margin-bottom: 120px;

  ${css.media.mobile`
    margin-left: 6%;
  `};
`
export const Title = styled.div`
  ${css.flex('justify-center')};
  width: 100%;
  font-size: 18px;
  color: ${theme('thread.articleTitle')};
`
export const TabBarWrapper = styled.div`
  ${css.flex('justify-center')};
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
`
export const ContentWrapper = styled.div`
  padding: 5px;
`
