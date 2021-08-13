import styled from 'styled-components'

import type { TTestable, TMetric } from '@/spec'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn('align-center', 'justify-start')}
  width: 100%;
  min-height: 100vh;
  background-image: ${theme('banner.linearGradient')};
`
export const InnerWrapper = styled.div<{ metric: TMetric }>`
  ${css.flexColumn('align-both')}
  ${({ metric }) => css.fitContentWidth(metric)};
  padding: 10px 0;
  margin-top: 12px;
  width: 100%;
`
export const ContentWrapper = styled.div`
  ${css.flexColumnGrow()};
  max-width: 100%;
`
export const Title = styled.h1`
  color: ${theme('thread.articleTitle')};
  font-size: 24px;
  margin-top: 8%;
`
export const Divider = styled.div`
  width: 80px;
  height: 1px;
  background-color: ${theme('thread.articleDigest')};
  margin-top: 18px;
  margin-bottom: 30px;
  opacity: 0.6;
`
export const Desc = styled.div<{ align?: boolean }>`
  color: ${theme('thread.articleDigest')};
  text-align: ${({ align }) => (align ? 'center' : 'left')};
  font-size: 16px;
  width: 68%;
`
export const FocusDesc = styled(Desc)`
  color: ${theme('thread.articleTitle')};
`
export const BlocksWrapper = styled.div`
  ${css.flex('align-both')};
  flex-wrap: wrap;
  margin-left: 10px;
`
export const Block = styled.div`
  width: 300px;
  height: 150px;
  border: 1px solid;
  border-color: #004b5e;
  margin-right: 20px;
  background: #0d3b49;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 15px;
`
