import styled from 'styled-components'

import type { TTestable, TActive } from '@/spec'
import css, { theme, animate } from '@/utils/css'

export { getSelectStyles } from './metric'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>``

export const BlinkCursor = styled.div`
  background-color: #139c9e;
  margin-left: 5px;
  margin-right: 2px;
  margin-top: 2px;
  width: 1px;
  height: 20px;
  animation: ${animate.blink} 1s ease-in infinite alternate;
`
export const OptionRow = styled.div`
  ${css.flex('align-end')};
`
export const OptionTitle = styled.div<TActive>`
  font-size: 14px;
  color: ${theme('thread.articleTitle')};
  background: ${({ active }) => (active ? '#00343D' : 'transparent')};
  padding: 0 5px;
  border-radius: 3px;
`
export const OptionDesc = styled.div`
  font-size: 12px;
  color: ${theme('thread.articleDigest')};
  opacity: 0.8;
  margin-left: 15px;
`
