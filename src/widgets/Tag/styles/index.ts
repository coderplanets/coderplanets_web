import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css, { theme } from '@/utils/css'

import CloseSVG from '@/widgets/Icons/CloseCross'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable & { closeable: boolean }>`
  ${css.flex('align-both')};
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  color: ${theme('tagger.text')};
  border: 1px solid;
  border-color: ${theme('tagger.border')};
  background: ${theme('tagger.bg')};

  box-sizing: border-box;
  margin: 0;
  list-style: none;
  line-height: 20px;
  height: 22px;
  padding: 0 7px;
  padding-right: ${({ closeable }) => (closeable ? '4px' : '7px')};

  border-radius: 4px;
  font-size: 12px;
  transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  opacity: 1;
  margin-right: 8px;
  cursor: pointer;
  white-space: nowrap;
`
export const CloseIcon = styled(CloseSVG)`
  fill: ${theme('tagger.text')};
  ${css.size(12)};
  opacity: 0.8;
  margin-left: 4px;
`
