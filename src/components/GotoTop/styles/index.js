import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${css.flex('align-both')};
  width: 30px;
  height: 30px;
  position: relative;
`
export const Icon = styled(Img)`
  fill: #1e687f;
  width: 20px;
  height: 20px;
  display: block;
  &:hover {
    fill: #25807d;
    cursor: pointer;
  }
`
export const Hint = styled.div`
  color: ${theme('thread.articleDigest')};
  position: absolute;
  right: -55px;
  font-size: 12px;
  opacity: 0;

  ${Wrapper}:hover & {
    opacity: 1;
  }
  transition: opacity 0.25s;
  transition-delay: 0.5s;
`
