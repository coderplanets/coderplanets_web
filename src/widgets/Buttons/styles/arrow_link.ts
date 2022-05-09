import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import ArrowSVG from '@/icons/Arrow'

import { getTextSize, getIconSize } from './metircs/arrow_link'

export const Wrapper = styled.a`
  ${css.flex('align-center')};
  text-decoration: none;
  cursor: pointer;

  transition: all 0.2s;
`
type TText = { $hoverColor: string; size: string }
export const Text = styled.div<TText>`
  color: ${({ color }) => color || theme('link')};
  font-size: ${({ size }) => getTextSize(size)};

  ${Wrapper}:hover & {
    color: ${({ $hoverColor }) => $hoverColor || theme('link')};
    visibility: visible;
  }
`
// type TIcon = { color: string; size: string }
// const Icon = styled(Img)<TIcon>`
//   fill: ${({ color }) => color || '#327ca1'};
//   width: ${({ size }) => getIconSize(size)};
//   height: ${({ size }) => getIconSize(size)};
//   display: block;
//   transition: all 0.2s;
//   opacity: 0.8;
// `
type TIcon = { color: string; size: string; $hoverColor: string }
export const RightIcon = styled(ArrowSVG)<TIcon>`
  fill: ${({ color }) => color || '#327ca1'};
  width: ${({ size }) => getIconSize(size)};
  height: ${({ size }) => getIconSize(size)};
  display: block;
  transition: all 0.2s;
  opacity: 0.8;

  transform: rotate(180deg);
  margin-left: 6px;
  visibility: hidden;

  ${Wrapper}:hover & {
    fill: ${({ $hoverColor }) => $hoverColor || '#327ca1'};
    margin-left: 10px;
    visibility: visible;
  }
`
