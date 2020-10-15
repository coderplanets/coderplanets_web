import styled from 'styled-components'

// import Img from '@/Img'
import { theme, css } from '@/utils'

export const Container = styled.div`
  ${css.flexColumn()};
  background: ${theme('drawer.articleBg')};
  min-height: ${({ show }) => (show ? '100px' : '60px')};
  height: auto;
  border-color: ${theme('drawer.articleBg')};
  transition: all 0.3s;

  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  border-radius: 3px;

  ${css.media.mobile`
    background: #08303c;  /* TODO: same as comment background */
  `};
`
export const InputEditorWrapper = styled.div`
  height: auto;
  margin: 0 30px;
  margin-bottom: 30px;
  display: ${({ showInputEditor }) => (showInputEditor ? 'block' : 'none')};
  font-size: 0.9em;
`

export const PreviewerWrapper = styled.div`
  padding: 0 33px;
  min-height: 150px;
`
