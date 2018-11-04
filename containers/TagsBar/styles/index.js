import styled from 'styled-components'

import { theme, cs } from '../../../utils'
import Img from '../../../components/Img'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
  margin-top: 30px;
  margin-left: 10px;
  padding-left: 10%;
`
export const TagItem = styled.div`
  ${cs.flex('align-center')};
  margin-bottom: 14px;
`
export const AllTagIcon = styled(Img)`
  fill: #6b8688;
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
  color: ${theme('tags.text')};
  font-size: 1rem;
  opacity: 0.9;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`
