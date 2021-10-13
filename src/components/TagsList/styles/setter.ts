import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'

import HashTagSVG from '@/SvgIcons/HashTagSVG'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  opacity: 0.8;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  transition: opacity 0.2s;
`
export const HashIcon = styled(HashTagSVG)`
  ${css.size(13)};
  fill: ${theme('thread.articleDigest')};
  transform: rotate(18deg);
  opacity: 0.6;

  ${Wrapper}:hover & {
    opacity: 0.8;
  }
`
export const Title = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  margin-left: 5px;
`
