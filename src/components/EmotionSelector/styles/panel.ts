import styled from 'styled-components'

import Img from '@/Img'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center', 'justify-center')};
  width: 200px;
`
export const EIcon = styled(Img)<{ name: string }>`
  margin-top: ${({ name }) => (name === 'downvote' ? '2px' : 0)};
  ${({ name }) =>
    name === 'confused' || name === 'popcorn' ? css.size(21) : css.size(20)};
  margin-right: ${({ name }) => (name === 'pill' ? 0 : '15px')};

  filter: saturate(0.6);
  opacity: 0.9;
  z-index: 1;

  &:hover {
    cursor: pointer;
    filter: saturate(1);
    opacity: 1;
  }
`
