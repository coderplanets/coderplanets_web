import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  cursor: pointer;
  /* border: 1px solid tomato; */
  ${css.size(36)};
  position: relative;
`
export const Avatar = styled(Img)`
  ${css.circle(36)};
  fill: ${theme('thread.articleTitle')};
  opacity: ${theme('avatarOpacity')};
  margin-top: 2px;
`
export const Tail = styled(Img)`
  position: absolute;
  fill: #257f7c; // ${theme('thread.articleDigest')};
  opacity: 0.8;
  ${css.size(18)};
  top: 24px;
  left: -3px;
  transform: rotate(-12deg);
  z-index: 1;
`
