import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'

import { getTextSize, getIconSize } from './metircs/arrow_link'

export const Wrapper = styled.a`
  ${css.flex('align-center')};
  text-decoration: none;
  cursor: pointer;

  transition: all 0.25s;
`
type TText = { hoverColor: string; size: string }
export const Text = styled.div<TText>`
  color: ${({ color }) => color || theme('thread.articleDigest')};
  font-size: ${({ size }) => getTextSize(size)};

  ${Wrapper}:hover & {
    color: ${({ hoverColor }) => hoverColor || theme('thread.articleTitle')};
    visibility: visible;
  }
`
type TIcon = { color: string; size: string }
const Icon = styled(Img)<TIcon>`
  fill: ${({ color }) => color || theme('thread.articleDigest')};
  width: ${({ size }) => getIconSize(size)};
  height: ${({ size }) => getIconSize(size)};
  display: block;
  transition: all 0.2s;
  opacity: 0.8;
`
export const RightIcon = styled(Icon)<{ hoverColor: string }>`
  transform: rotate(180deg);
  margin-left: 6px;
  visibility: hidden;

  ${Wrapper}:hover & {
    fill: ${({ hoverColor }) => hoverColor || theme('thread.articleTitle')};
    margin-left: 10px;
    visibility: visible;
  }
`
