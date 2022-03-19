import styled from 'styled-components'

import type { TActive } from '@/spec'
import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  /* NOTE: the width and height here is a MUST, to hold the icon place, otherwise the width-calc will fail  */
  width: 20px;
  height: 15px;

  ${css.media.mobile`
    display: none;
  `}
`
export const Icon = styled(Img)<TActive>`
  fill: ${({ active }) =>
    active ? theme('thread.articleTitle') : theme('thread.articleDigest')};

  ${css.size(15)};

  ${css.media.mobile`
    ${css.size(13)};
  `}
`
