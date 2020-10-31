import styled from 'styled-components'

// import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${css.flex('align-both')};
  color: ${theme('thread.articleTitle')};
  width: ${({ width }) => width};
  height: ${({ width }) => width};
  font-size: 10px;
  background: #074857;
  border-radius: 100%;

  margin-top: ${({ top }) => top};
  margin-bottom: ${({ bottom }) => bottom};
  margin-left: ${({ left }) => left};
  margin-right: ${({ right }) => right};
`
export const Name = styled.div`
  font-size: 10px;
`
