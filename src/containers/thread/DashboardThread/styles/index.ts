import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flex()};
  width: 100%;
`
export const MainWrapper = styled.div`
  flex-grow: 1;
  min-height: 500px;

  background: transparent;
  margin-top: 30px;
  padding-left: 25px;
  padding-right: 80px;
  margin-right: 68px;
  border-right: 1px solid;
  border-right-color: ${theme('border')};
`
