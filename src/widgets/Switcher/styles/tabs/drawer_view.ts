import styled from 'styled-components'

import type { TTestable, TActive } from '@/spec'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.nav.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flex('align-center')};
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 36px;
  border: 2px solid;
  border-color: ${theme('border')};
  border-radius: 8px;
  background: ${theme('border')};
  padding: 0 1px;
`
export const TabItem = styled.div<TActive>`
  ${css.flex('align-both')};
  height: 30px;

  color: ${({ $active }) =>
    $active ? theme('thread.articleTitle') : theme('thread.articleDigest')};
  background: ${({ $active }) => ($active ? theme('hoverBg') : 'transparent')};
  font-weight: ${({ $active }) => ($active ? 600 : 'normal')};
  font-size: 12px;
  flex-grow: 1;
  border-radius: 6px;

  &:hover {
    font-weight: 600;
    cursor: pointer;
  }

  transition: all 0.2s;
`
