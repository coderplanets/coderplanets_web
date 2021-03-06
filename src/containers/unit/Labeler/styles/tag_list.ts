import styled from 'styled-components'

import { theme, animate, css } from '@/utils'

export const Wrapper = styled.div`
  padding: 10px;
  padding-bottom: 0;
`

export const LabelItem = styled.div`
  ${css.flex()};
  color: ${theme('editor.footer')};
  &:hover {
    color: #51abb2;
    animation: ${animate.pulse} 0.4s linear;
  }
`

export const TagItem = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 8px;
  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`
export const TagDot = styled.div`
  ${css.circle(12)};
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
