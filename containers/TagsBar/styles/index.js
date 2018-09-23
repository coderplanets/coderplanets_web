import styled from 'styled-components'

import { theme } from '../../../utils'
import Img from '../../../components/Img'

export const Wrapper = styled.div`
  flex-direction: column;
  margin-left: 10px;
  padding-left: 10%;
`
export const TagItem = styled.div`
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
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
  width: 14px;
  height: 14px;
  margin-right: 12px;
  border-radius: 100%;
  background-color: ${({ active, title, color }) =>
    getDotBgColor(active, title, color)};
  display: inline-block;
  opacity: ${theme('tags.dotOpacity')};
`
// ${props => (props.active === props.title ? 1 : 0.7)}

export const TagTitle = styled.div`
  color: ${theme('tags.text')};
  font-size: 1rem;
`
