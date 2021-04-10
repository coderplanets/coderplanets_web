import styled from 'styled-components'

import HashTagSVG from '@/SvgIcons/HashTagSVG'
import { theme, css } from '@/utils'

export const Wrapper = styled.div<{ marginLeft: boolean }>`
  ${css.flex()};
  align-items: flex-end;
  margin-left: ${({ marginLeft }) => (marginLeft ? '8px' : 0)};
`
export const Tag = styled.div`
  ${css.flex('align-center')};
  margin-right: 4px;
  min-width: 40px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTag')};
  opacity: 0.8;
  font-size: 12px;

  ${css.media.mobile`
    color: ${theme('thread.articleDigest')};
    font-size: 12px;
    opacity: 1;
  `};
`
export const MoreText = styled.div``
export const HashSign = styled(HashTagSVG)<{ color: string }>`
  fill: ${({ color }) => color};
  ${css.size(12)};
  transform: rotate(18deg);
  opacity: ${theme('tags.dotOpacity')};
  margin-right: 2px;

  ${css.media.mobile`
    ${css.circle(10)};
  `};
`

export const PopoverInfo = styled.div`
  padding: 10px;
  padding-top: 12px;
  padding-bottom: 5px;
`
