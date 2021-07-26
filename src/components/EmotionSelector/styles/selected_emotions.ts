import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  cursor: pointer;
  margin-right: 14px;
  margin-right: 5px;
  padding: 0 5px;
  border-radius: 5px;
  margin-left: -5px;

  &:hover {
    background: #023c4a;
  }
`
export const EIcon = styled(Img)<{ name: string }>`
  margin-top: ${({ name }) => (name === 'downvote' ? '2px' : 0)};
  ${({ name }) =>
    name === 'confused' || name === 'popcorn' ? css.size(15) : css.size(14)};
  margin-right: 6px;

  filter: saturate(0.6);
  opacity: 0.9;
`
export const Count = styled.div`
  opacity: 0.8;

  ${Wrapper}:hover & {
    color: #00a59b;
  }
`
export const PopUsers = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 13px;
  margin-right: 5px;
`
export const PopHint = styled.div`
  ${css.flex('align-center')};
  padding: 3px 5px;
  padding-left: 10px;
`
