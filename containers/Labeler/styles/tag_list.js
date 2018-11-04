import styled from 'styled-components'

import { theme, animate, cs } from '../../../utils'

export const Wrapper = styled.div`
  padding: 10px;
`

export const LabelItem = styled.div`
  display: flex;
  color: ${theme('editor.footer')};
  &:hover {
    color: #51abb2;
    animation: ${animate.pulse} 0.4s linear;
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
  ${cs.circle('12px')};
  margin-right: 8px;
  margin-left: 3px;
  background-color: ${({ color }) => color};
  opacity: ${theme('tags.dotOpacity')};
`
// ${props => (props.active === props.title ? 1 : 0.7)}

export const TagTitle = styled.div`
  color: ${theme('tags.text')};
  font-size: 1rem;
`
