import styled from 'styled-components'

import type { TActive } from '@/spec'
import Img from '@/Img'
import HashTagSVG from '@/icons/HashTag'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

import { getActiveColor } from '../metric'

import { TagsWrapper } from './index'

type TTag = TActive & { color?: string }

export const Wrapper = styled.div<TTag>`
  ${css.flex('align-center')};
  margin-left: -2px;
  padding: 4px;
  max-width: 180px;
  border-radius: 5px;

  background: ${({ $active }) => (!$active ? 'transparent' : '#0e303d')};

  &:hover {
    background: #06303b;
    cursor: pointer;
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
type THashSign = TActive & { color: string; activeid: string }
export const HashSign = styled(HashTagSVG)<THashSign>`
  fill: ${({ $active, color, activeid }) =>
    getActiveColor($active, theme(`baseColor.${color}`), activeid)};
  ${css.size(12)};
  margin-top: 2px;
  margin-right: 10px;
  opacity: ${theme('tags.dotOpacity')};

  ${Wrapper}:hover & {
    opacity: 0.9;
  }

  transform: rotate(18deg);
  transition: filter 0.1s;
`
export const Tag = styled.div<TTag>`
  ${css.flex('align-end', 'justify-between')};
  width: 100%;
  font-size: 14px;
  padding-left: 4px;
  color: ${({ color, $active }) =>
    !$active ? theme('tags.text') : theme(`baseColor.${color}`)};

  /* color: ${({ color }) => theme(`baseColor.${color}`)}; */

  ${Wrapper}:hover & {
    cursor: pointer;
  }

  transition: all 0.1s;
`
export const Title = styled.div`
  letter-spacing: 1px;
`
export const RawWrapper = styled.div<TActive>`
  ${css.flex('align-center')};
  opacity: ${({ $active }) => ($active ? 1 : 0)};

  ${Wrapper}:hover & {
    cursor: pointer;
    opacity: 1;
  }
  transition: all 0.1s;
`
export const Raw = styled.div`
  color: ${theme('tags.text')};
  font-size: 12px;
  margin-top: 1px;
  opacity: 0.8;
`
export const CountInfoWrapper = styled.div`
  opacity: 0;

  ${TagsWrapper}:hover & {
    opacity: 1;
  }

  transition: opacity 0.3s;
  transition-delay: 0.5s;
`
