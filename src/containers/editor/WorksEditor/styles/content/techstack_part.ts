import styled from 'styled-components'

import type { TTestable } from '@/spec'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn('align-start', 'justify-start')};
  width: 100%;
  min-height: 480px;
  color: ${theme('thread.articleDigest')};
  padding: 20px 0;
  padding-top: 0;
`
export const TechsWrapper = styled.div`
  width: 100%;
  min-height: 300px;
  margin-bottom: 25px;
`
