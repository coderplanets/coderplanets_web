import styled from 'styled-components'

import type { TTestable, TThread } from '@/spec'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn()};
  width: 200px;
  min-width: 200px;
  color: ${theme('thread.articleDigest')};
`
export const MainWrapper = styled.div<{ thread: TThread }>`
  flex-grow: 1;
  width: 100%;

  background: transparent;
  border-radius: 6px;
  margin-top: 12px;
  padding-left: 25px;
  padding-right: 80px;
  margin-right: 65px;
  border-right: 1px solid #eae9e9;
`
