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
  width: 100%;
  min-height: 500px;

  background: transparent;
  border-radius: 6px;
  margin-top: 12px;
  padding-left: 25px;
  padding-right: 65px;
  margin-right: 60px;
  border-right: 1px solid;
  border-right-color: ${theme('border')};
`

export const PreviousTitle = styled.div`
  font-size: 18px;
  color: ${theme('thread.articleTitle')};
  margin-top: 45px;
  margin-bottom: 22px;
`
