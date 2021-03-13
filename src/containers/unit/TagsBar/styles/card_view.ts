import styled from 'styled-components'

import { TActive } from '@/spec'
import Img from '@/Img'
import { theme, css } from '@/utils'

type TTagDot = TActive & { title: string; color: string }

export const Wrapper = styled.div`
  ${css.flex()};
  flex-wrap: wrap;
`
export const TagItem = styled.div`
  ${css.flex('align-center')};
  min-width: 33%;
  margin-bottom: 10px;
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

export const TagDot = styled.div<TTagDot>`
  ${css.circle(9)};

  margin-right: 8px;
  background-color: ${({ active, title, color }) =>
    getDotBgColor(active, title, color)};
  opacity: ${theme('tags.dotOpacity')};
`
// ${props => (props.active === props.title ? 1 : 0.7)}

export const TagTitle = styled.div`
  flex-grow: 1;
  color: ${theme('tags.text')};
  font-size: 14px;
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
