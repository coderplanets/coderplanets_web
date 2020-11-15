import styled from 'styled-components'

/* import { Img } from '../..' */
import { theme, css } from '@/utils'

export const Wrapper = styled.div`
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
  font-size: 0.8rem;

  ${css.media.mobile`
    color: ${theme('thread.articleDigest')};
    font-size: 12px;
    opacity: 1;
  `};
`
export const MoreText = styled.div``
export const Dot = styled.div`
  ${css.circle(10)};
  margin-right: 4px;
  background-color: ${({ color }) => color};
  margin-top: -1px;

  opacity: ${theme('tags.dotOpacity')};

  ${css.media.mobile`
    ${css.circle(8)};
  `};
`
export const PopoverInfo = styled.div`
  padding: 10px;
  padding-top: 12px;
  padding-bottom: 5px;
`
