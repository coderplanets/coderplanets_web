import styled from 'styled-components'

import { TActive } from '@/types'
import Img from '@/Img'
import HashTagSVG from '@/SvgIcons/HashTagSVG'
import { theme, css } from '@/utils'

import { TagsWrapper } from './index'

type TTag = TActive & { inline: boolean }

export const Wrapper = styled.div<TTag>`
  ${css.flex('align-center')};
  margin-bottom: ${({ inline }) => (!inline ? '3px' : 0)};
  padding: ${({ inline }) => (!inline ? '5px' : 0)};
  max-width: 180px;
  border-radius: 5px;

  background: ${({ active, inline }) =>
    !active || inline ? 'transparent' : '#0e303d'};

  &:hover {
    background: ${({ inline }) => (!inline ? '#0e303d' : 'none')};
  }
`
export const AllTagIcon = styled(Img)`
  fill: ${theme('banner.desc')};
  margin-right: 10px;
  ${css.size(14)};
  transform: rotate(17deg);
`
const getActiveColor = (active, color, activeid) => {
  if (activeid !== null) return active ? color : '#497684'

  return !active ? color : '#497684'
}

export const HashSign = styled(HashTagSVG)`
  fill: ${({ active, color, activeid }) =>
    getActiveColor(active, color, activeid)};
  ${css.size(14)};
  margin-right: ${({ inline }) => (!inline ? '12px' : '3px')};
  opacity: ${theme('tags.dotOpacity')};

  transform: rotate(18deg);
`
export const TagTitle = styled.div<TTag>`
  color: ${theme('tags.text')};
  font-size: ${({ inline }) => (!inline ? '14.5px' : '13px')};
  opacity: 0.9;
  letter-spacing: 2px;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  opacity: ${({ active }) => (active ? 1 : 0.9)};
  ${({ inline }) => (!inline ? css.cutFrom('120px') : css.cutFrom('50px'))};

  &:hover {
    cursor: pointer;
    opacity: 1;
    font-weight: bold;
  }

  ${TagsWrapper}:hover & {
    ${css.cutFrom('80px')};
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
