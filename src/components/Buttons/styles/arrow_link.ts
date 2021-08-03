import styled from 'styled-components'

import Img from '@/Img'
import css from '@/utils/css'

import { getTextSize, getIconSize } from './metircs/arrow_link'

export const Wrapper = styled.a`
  ${css.flex('align-center')};
  text-decoration: none;
  cursor: pointer;

  transition: all 0.25s;
`
type TText = { hoverColor: string; size: string }
export const Text = styled.div<TText>`
  color: ${({ color }) => color || '#327ca1'};
  font-size: ${({ size }) => getTextSize(size)};

  ${Wrapper}:hover & {
    color: ${({ hoverColor }) => hoverColor || '#327ca1'};
    visibility: visible;
  }
`
type TIcon = { color: string; size: string }
const Icon = styled(Img)<TIcon>`
  fill: ${({ color }) => color || '#327ca1'};
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
    fill: ${({ hoverColor }) => hoverColor || '#327ca1'};
    margin-left: 10px;
    visibility: visible;
  }
`
