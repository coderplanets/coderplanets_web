import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testid,
}))``

export const Tail = styled(Img)`
  position: absolute;
  fill: #257f7c; // ${theme('thread.articleDigest')};
  opacity: 0.8;
  ${css.size(16)};
  top: 24px;
  left: -2px;
  transform: rotate(-10deg);
  z-index: 1;

  transition: all 0.25s;
`
