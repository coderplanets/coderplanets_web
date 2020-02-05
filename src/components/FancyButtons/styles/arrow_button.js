import styled from 'styled-components'

import Img from '@Img'
import { theme, cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};
  opacity: ${({ transparentFirst }) => (transparentFirst ? '0.65' : 1)};

  &:hover {
    cursor: pointer;
    color: ${theme('thread.articleTitle')};
    opacity: 1;
  }
  transition: all 0.25s;
`
export const Text = styled.div`
  font-size: ${({ size }) => size};
  color: #327ca1;
`
export const Icon = styled(Img)`
  fill: #327ca1;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  display: block;
  transition: all 0.2s;
`
export const LeftIcon = styled(Icon)`
  margin-right: 6px;

  ${Wrapper}:hover & {
    margin-right: 10px;
    fill: #327ca1;
  }
`
export const RightIcon = styled(Icon)`
  transform: rotate(180deg);
  margin-left: 6px;

  ${Wrapper}:hover & {
    margin-left: 10px;
    fill: #327ca1;
  }
`
