import styled from 'styled-components'

import Img from '@/Img'
import HashTagSVG from '@/SvgIcons/HashTagSVG'
import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 5px;
  max-width: 180px;
  padding: 5px;
  border-radius: 5px;

  background: ${({ active }) => (active ? '#0e303d' : 'transparent')};

  &:hover {
    background: #0e303d;
  }
`
export const AllTagIcon = styled(Img)`
  fill: ${theme('banner.desc')};
  margin-right: 10px;
  ${css.size(14)};
  transform: rotate(17deg);
`
const getActiveColor = (active, color) => {
  return !active ? color : '#497684'
}

export const TagDot = styled.div`
  position: relative;
  ${css.size(15)};
  ${css.flex('align-both')};
  border-radius: 4px;
  margin-right: 12px;
  opacity: ${theme('tags.dotOpacity')};
`
export const HashSign = styled(HashTagSVG)`
  fill: ${({ active, color }) => getActiveColor(active, color)};
  ${css.size(14)};
  transform: rotate(18deg);
`
export const TagTitle = styled.div`
  flex-grow: 1;
  color: ${theme('tags.text')};
  font-size: 14.5px;
  opacity: 0.9;
  letter-spacing: 2px;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  opacity: ${({ active }) => (active ? 1 : 0.9)};

  &:hover {
    cursor: pointer;
    opacity: 1;
    font-weight: bold;
  }
  transition: all 0.2s;
`
export const CountInfoWrapper = styled.div`
  opacity: 0;

  ${Wrapper}:hover & {
    opacity: 1;
  }

  transition: opacity 0.3s;
  transition-delay: 0.5s;
`
