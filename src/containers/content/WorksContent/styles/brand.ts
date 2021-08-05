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
  margin-top: 12px;
`
export const Title = styled.div`
  ${css.flex('align-center')};
  width: 100%;
`
export const BrandText = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 18px;
  font-weight: bold;
  padding: 0 4px;
  border-radius: 5px;

  background: linear-gradient(
    to top,
    #003b49 35%,
    transparent 35%,
    transparent 80%
  );
`

export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  margin-top: 10px;
`
export const Divider = styled.div<TSpace>`
  height: 1px;
  width: 100%;
  background: #004353;
  margin-top: 20px;
  opacity: 0.6;
`
