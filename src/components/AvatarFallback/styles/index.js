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
  /* margin-bottom: 2px;
  margin-right: 10px; */
  font-size: 10px;
  background: #074857;
`
export const Name = styled.div`
  font-size: 10px;
`
