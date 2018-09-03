import styled from 'styled-components'

import { theme, Animate } from '../../../utils'
// import { Img } from '../../../components'

export const Wrapper = styled.div`
  padding: 10px;
`

export const LabelItem = styled.div`
  display: flex;
  color: ${theme('editor.footer')};
  &:hover {
    color: #51abb2;
    animation: ${Animate.pulse} 0.4s linear;
  }
`

export const TagItem = styled.div`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`
export const TagDot = styled.div`
  width: 12px;
  height: 12px;
  margin-right: 8px;
  border-radius: 100%;
  background-color: ${({ color }) => color};
  opacity: ${theme('tags.dotOpacity')};
`
// ${props => (props.active === props.title ? 1 : 0.7)}

export const TagTitle = styled.div`
  color: ${theme('tags.text')};
  font-size: 1rem;
`
