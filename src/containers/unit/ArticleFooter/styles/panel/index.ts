import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn()};
  position: relative;
  border-top: 1px solid;
  border-bottom: 3px solid;
  border-color: ${theme('border')};
  padding: 26px 0;
  padding-bottom: 32px;
  margin-top: 72px;
  margin-bottom: 42px;

  color: ${theme('thread.articleDigest')};
`
export const TabsWrapper = styled.div`
  position: absolute;
  top: -36px;
  left: -14px;
`
export const ReportWrapper = styled.div`
  position: absolute;
  top: -28px;
  right: 18px;
  color: ${theme('thread.articleDigest')};
`
export const ContentWrapper = styled.div`
  ${css.flex('justify-between')};
`
