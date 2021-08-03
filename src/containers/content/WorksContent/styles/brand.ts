import styled from 'styled-components'

import type { TTestable, TSpace } from '@/spec'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn()};
  width: 100%;
  margin-bottom: 28px;
  margin-top: 8px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 18px;
  font-weight: bold;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
`
export const Divider = styled.div<TSpace>`
  height: 1px;
  width: 60%;
  background: #004353;
  margin-top: 32px;
  opacity: 0.6;
`
