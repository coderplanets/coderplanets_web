import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  margin-top: 30px;
  margin-left: 20px;
`
export const TagItem = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 14px;
  max-width: 180px;
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
  ${css.circle(12)};
  margin-right: 12px;
  background-color: ${({ active, title, color }) =>
    getDotBgColor(active, title, color)};
  opacity: ${theme('tags.dotOpacity')};
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
export const TagOptionsWrapper = styled.div`
  display: none;
  ${TagItem}:hover & {
    display: block;
  }
`
