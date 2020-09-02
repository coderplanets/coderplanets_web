import styled from 'styled-components'

import Img from '@/Img'
import { theme, cs } from '@/utils'

export const Wrapper = styled.a`
  ${cs.flex('align-center')};
  text-decoration: none;
  cursor: pointer;

  transition: all 0.25s;
`
export const Text = styled.div`
  color: ${({ color }) => color || theme('thread.articleDigest')};
  font-size: ${({ size }) => size};

  ${Wrapper}:hover & {
    color: ${({ hoverColor }) => hoverColor || theme('thread.articleTitle')};
    visibility: visible;
  }
`
const Icon = styled(Img)`
  fill: ${({ color }) => color || theme('thread.articleDigest')};
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  display: block;
  transition: all 0.2s;
  opacity: 0.8;
`
export const RightIcon = styled(Icon)`
  transform: rotate(180deg);
  margin-left: 6px;
  visibility: hidden;

  ${Wrapper}:hover & {
    fill: ${({ hoverColor }) => hoverColor || theme('thread.articleTitle')};
    margin-left: 10px;
    visibility: visible;
  }
`
