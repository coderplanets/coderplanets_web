import styled from 'styled-components'

import Img from '@/Img'
import css from '@/utils/css'
import { theme } from '@/utils/themes'

export const Wrapper = styled.div`
  ${css.flex('align-center', 'justify-center')};
  width: 230px;
  padding: 8px 10px;
  padding-top: 12px;
`
export const Item = styled.div<{ name: string }>`
  ${css.flexColumn('align-center', 'justify-center')};
  margin-right: ${({ name }) => (name === 'pill' ? 0 : '15px')};
`
export const EIcon = styled(Img)<{ name: string }>`
  margin-top: ${({ name }) => (name === 'downvote' ? '2px' : 0)};
  ${({ name }) =>
    name === 'confused' || name === 'popcorn' ? css.size(21) : css.size(20)};

  filter: saturate(0.6);
  opacity: 0.9;
  z-index: 1;

  ${Item}:hover & {
    cursor: pointer;
    filter: saturate(1);
    opacity: 1;
  }
`
export const Name = styled.div`
  font-size: 11px;
  margin-top: 5px;
  color: ${theme('thread.articleDigest')};

  ${Item}:hover & {
    cursor: pointer;
    color: ${theme('thread.articleTitle')};
  }
`
