import styled from 'styled-components'

import type { TActive } from '@/spec'
import Img from '@/Img'
import HashTagSVG from '@/icons/HashTag'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

import { getActiveColor } from '../metric'

import { TagsWrapper } from './index'

type TTag = TActive & { $inline: boolean }

export const Wrapper = styled.div<TTag>`
  ${css.flex('align-center')};
  margin-left: -3px;
  padding: ${({ $inline }) => (!$inline ? '4px' : 0)};
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
export const HashWrapper = styled.div`
  ${css.size(15)};
  margin-right: 6px;
`
type THashSign = TActive & { color: string; activeid: string; $inline: boolean }
export const HashSign = styled(HashTagSVG)<THashSign>`
  fill: ${({ $active, color, activeid }) =>
    getActiveColor($active, color, activeid)};
  ${css.size(14)};
  margin-top: 1px;
  margin-right: ${({ $inline }) => (!$inline ? '12px' : '3px')};
  opacity: ${theme('tags.dotOpacity')};
  filter: saturate(0.5);

  ${Wrapper}:hover & {
    filter: saturate(1);
  }

  transform: rotate(18deg);
  transition: filter 0.1s;
`
export const TagTitle = styled.div<TTag>`
  color: ${theme('tags.text')};
  font-size: ${({ $inline }) => (!$inline ? '14.5px' : '13px')};
  opacity: 0.9;
  letter-spacing: 3px;
  font-weight: ${({ $active }) => ($active ? 'bold' : 'normal')};
  opacity: ${({ $active }) => ($active ? 1 : 0.9)};
  /* ${({ $inline }) =>
    !$inline ? css.cutRest('120px') : css.cutRest('50px')}; */

  ${css.cutRest('120px')};

  ${Wrapper}:hover & {
    cursor: pointer;
    opacity: 1;
  }

  transition: all 0.1s;
`
export const CountInfoWrapper = styled.div`
  opacity: 0;

  ${TagsWrapper}:hover & {
    opacity: 1;
  }

  transition: opacity 0.3s;
  transition-delay: 0.5s;
`
