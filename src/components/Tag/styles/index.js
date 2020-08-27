import styled from 'styled-components'

import Img from '@/Img'
import { cs, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-testid': props.testId,
}))`
  ${cs.flex('align-both')};
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
export const CloseIcon = styled(Img)`
  fill: ${theme('tagger.text')};
  display: block;
  width: 14px;
  height: 14px;
  margin-left: 2px;
`
