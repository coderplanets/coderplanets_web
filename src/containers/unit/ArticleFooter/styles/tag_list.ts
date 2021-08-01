import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'
import HashTagSVG from '@/SvgIcons/HashTagSVG'

export const Wrapper = styled.article`
  ${css.flex('justify-start', 'align-center')};
  position: relative;
`
export const Tag = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  padding: 2px 10px;
  background: #00333e;
  border-radius: 5px;
  margin-right: 12px;

  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`
export const Dot = styled(HashTagSVG)<{ bgColor: string }>`
  ${css.size(13)};
  fill: ${({ bgColor }) => bgColor};
  margin-right: 6px;
  opacity: ${theme('tags.dotOpacity')};
  transform: rotate(18deg);
  filter: saturate(0.5);

  ${Wrapper}:hover & {
    filter: saturate(1);
  }
`
