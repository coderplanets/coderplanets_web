import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'
import HashTagSVG from '@/SvgIcons/HashTagSVG'

export const Wrapper = styled.article`
  ${css.flex('justify-start', 'align-center')};
  position: relative;
  width: 43%;
  ${css.cutRest('43%')};
`
export const Tag = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  margin-right: 12px;
  cursor: pointer;
`
export const Dot = styled(HashTagSVG)<{ color: string }>`
  ${css.size(13)};
  fill: ${({ color }) => theme(`baseColor.${color.toLowerCase()}`)};
  margin-right: 5px;
  transform: rotate(18deg);
  filter: saturate(0.8);

  ${Wrapper}:hover & {
    filter: saturate(1);
  }
`
export const Title = styled.div`
  font-size: 12px;
  color: ${theme('thread.articleDigest')};

  ${Wrapper}:hover & {
    color: ${theme('thread.articleTitle')};
  }

  transition: all 0.2s;
`
