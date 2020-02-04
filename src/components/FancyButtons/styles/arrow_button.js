import styled from 'styled-components'

import Img from '@Img'
import { theme, cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};

  &:hover {
    cursor: pointer;
    color: ${theme('thread.articleTitle')};
  }
`
export const Text = styled.div`
  font-size: ${({ size }) => size};
  color: #327ca1;
`
export const ArrowIcon = styled(Img)`
  fill: #327ca1;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  display: block;
  transform: rotate(180deg);
  margin-left: 6px;

  ${Wrapper}:hover & {
    margin-left: 10px;
    fill: #327ca1;
  }
  transition: all 0.2s;
`
