import styled from 'styled-components'

import type { TTestable } from '@/spec'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flex('align-center')};
  padding: 3px 6px;
  padding-right: 0;
  border-radius: 8px;
  margin-left: -4px;
  margin-top: -1px;
`
export const SelectEmotionWrapper = styled.div`
  ${css.circle(24)};
  ${css.flex('align-both')};
  background: ${theme('hoverBg')};
  margin-left: 2px;
`
