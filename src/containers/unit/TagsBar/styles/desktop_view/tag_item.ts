import styled from 'styled-components'

import type { TActive } from '@/spec'
import Img from '@/Img'
import HashTagSVG from '@/SvgIcons/HashTagSVG'
import { theme, css } from '@/utils'

import { getActiveColor } from '../metric'

import { TagsWrapper } from './index'

type TTag = TActive & { $inline: boolean }

export const Wrapper = styled.div<TTag>`
  ${css.flex('align-center')};
  margin-bottom: 0;
  margin-left: -1px;
  padding: ${({ $inline }) => (!$inline ? '3px' : 0)};
  max-width: 180px;
  border-radius: 5px;

  background: ${({ $active, $inline }) =>
    !$active || $inline ? 'transparent' : '#0e303d'};

  &:hover {
    background: ${({ $inline }) => (!$inline ? '#0e303d' : 'none')};
  }
`
export const AllTagIcon = styled(Img)`
  fill: ${theme('banner.desc')};
  margin-right: 10px;
  ${css.size(14)};
  transform: rotate(17deg);
`

type THashSign = TActive & { color: string; activeid: string; $inline: boolean }
export const HashSign = styled(HashTagSVG)<THashSign>`
  fill: ${({ $active, color, activeid }) =>
    getActiveColor($active, color, activeid)};
  ${css.size(14)};
  margin-right: ${({ $inline }) => (!$inline ? '12px' : '3px')};
  opacity: ${theme('tags.dotOpacity')};
  filter: saturate(0.5);

  ${Wrapper}:hover & {
    filter: saturate(1);
  }

  transform: rotate(18deg);
  transition: filter 0.25s;
`
export const TagTitle = styled.div<TTag>`
  color: ${theme('tags.text')};
  font-size: ${({ $inline }) => (!$inline ? '14.5px' : '13px')};
  opacity: 0.9;
  letter-spacing: 2px;
  font-weight: ${({ $active }) => ($active ? 'bold' : 'normal')};
  opacity: ${({ $active }) => ($active ? 1 : 0.9)};
  ${({ $inline }) => (!$inline ? css.cutRest('120px') : css.cutRest('50px'))};

  &:hover {
    cursor: pointer;
    opacity: 1;
    font-weight: bold;
  }

  ${Wrapper}:hover & {
    opacity: 1;
  }

  ${TagsWrapper}:hover & {
    ${css.cutRest('80px')};
  }

  transition: all 0.2s;
`
export const CountInfoWrapper = styled.div`
  opacity: 0;

  ${TagsWrapper}:hover & {
    opacity: 1;
  }

  transition: opacity 0.3s;
  transition-delay: 0.5s;
`
