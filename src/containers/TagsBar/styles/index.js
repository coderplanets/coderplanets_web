import styled from 'styled-components'

import Img from '@/Img'
import { theme, cs } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
  margin-top: 30px;
  margin-left: 10px;
  padding-left: 5%;
`
export const TagItem = styled.div`
  ${cs.flex('align-center')};
  margin-bottom: 14px;
`
export const AllTagIcon = styled(Img)`
  fill: ${theme('banner.desc')};
  margin-right: 10px;
  margin-top: 2px;
  width: 14px;
  height: 14px;
`
const getDotBgColor = (active, title, color) => {
  if (!active) return color
  return active === title ? color : 'lightgrey'
}

export const TagDot = styled.div`
  ${cs.circle('14px')};

  margin-right: 12px;
  background-color: ${({ active, title, color }) =>
    getDotBgColor(active, title, color)};
  opacity: ${theme('tags.dotOpacity')};
`
// ${props => (props.active === props.title ? 1 : 0.7)}

export const TagTitle = styled.div`
  flex-grow: 1;
  color: ${theme('tags.text')};
  font-size: 15px;
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
