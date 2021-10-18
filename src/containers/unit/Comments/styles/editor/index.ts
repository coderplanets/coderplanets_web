import styled from 'styled-components'

// import Img from '@/Img'
import type { TActive } from '@/spec'
// import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div<TActive>`
  ${css.flexColumn()};
  padding: ${({ show }) => (show ? '10px 0' : '0')};
  background: ${({ show }) => (show ? 'transparent' : '#013340')};
  min-height: ${({ show }) => (show ? '300px' : '50px')};
  height: auto;
  border-bottom: 3px solid;
  border-color: #00424f;
  transition: all 0.3s;

  box-shadow: ${({ show }) =>
    show ? 'none' : '0 1px 4px rgba(0, 0, 0, 0.04)'};
  border-radius: 3px;

  ${css.media.mobile`
    background: #08303c;  /* TODO: same as comment background */
  `};
`
export const InputEditorWrapper = styled.div<{ showInputEditor: boolean }>`
  height: auto;
  margin: 0 30px;
  margin-bottom: 30px;
  display: ${({ showInputEditor }) => (showInputEditor ? 'block' : 'none')};
  font-size: 0.9em;
`
