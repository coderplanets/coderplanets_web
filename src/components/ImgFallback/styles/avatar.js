import styled from 'styled-components'

// import Img from '@/Img'
import { css, theme } from '@/utils'
import { getFontSize } from './metric/avatar'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testid,
}))`
  ${css.flex('align-both')};
  color: ${theme('thread.articleTitle')};
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background: ${theme('avatar.fallbackBg')};
  border-radius: 100%;

  margin-top: ${({ top }) => `${top}px`};
  margin-bottom: ${({ bottom }) => `${bottom}px`};
  margin-left: ${({ left }) => `${left}px`};
  margin-right: ${({ right }) => `${right}px`};

  border: ${({ quote }) => (quote ? '2px solid' : 'none')};
  border-color: ${({ quote }) => (quote ? theme('avatar.quote') : 'none')};
`
export const Name = styled.div`
  font-family: 'Audiowide', cursive;
  font-size: ${({ size }) => getFontSize(size)};
`
