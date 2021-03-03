import styled from 'styled-components'

import Img from '@/Img'
import HashTagSVG from '@/SvgIcons/HashTagSVG'
import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  position: relative;
  ${css.flexColumn()};
  margin-top: 30px;
  margin-left: 12px;
`
export const TagItem = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 5px;
  max-width: 180px;
  padding: 5px;
  border-radius: 5px;

  &:hover {
    background: #0e303d;
  }
`
export const AllTagIcon = styled(Img)`
  fill: ${theme('banner.desc')};
  margin-right: 10px;
  margin-top: 2px;
  ${css.size(14)};
`
const getDotBgColor = (active, title, color) => {
  if (!active) return color
  return active === title ? color : 'lightgrey'
}

export const TagDot = styled.div`
  position: relative;
  ${css.size(15)};
  ${css.flex('align-both')};
  border-radius: 4px;
  margin-right: 12px;
  /* background: #3d575d; */
  opacity: ${theme('tags.dotOpacity')};
`
export const HashSign = styled(HashTagSVG)`
  fill: ${({ active, title, color }) => getDotBgColor(active, title, color)};
  ${css.size(14)};
  transform: rotate(18deg);
`
// ${props => (props.active === props.title ? 1 : 0.7)}

export const TagTitle = styled.div`
  flex-grow: 1;
  color: ${theme('tags.text')};
  font-size: 14.5px;
  opacity: 0.9;
  letter-spacing: 0.1rem;

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
  /* display: none; */
  /* ${TagItem}:hover & {
    display: block;
  } */

  transition: opacity 0.3s;
  transition-delay: 0.5s;
`
