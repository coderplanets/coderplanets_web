import styled from 'styled-components'

// import Img from '../../Img'
import { theme, cs, animate } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flex()};
  text-align: center;
`
export const NumberSection = styled.div`
  ${cs.flexColumn('justify-center')};

  padding: 0 5px;
  border-radius: 4px;

  &:hover {
    background: ${({ readonly }) =>
      readonly ? '' : theme('banner.numberHoverBg')};
  }
`
// text-decoration: ${({ readonly }) => (readonly ? '' : 'underline')};
export const NumberTitle = styled.div`
  color: ${theme('banner.numberDesc')};
  &:hover {
    color: ${({ readonly }) => (readonly ? '' : theme('banner.active'))};
    animation: ${animate.pulseRule};
    cursor: ${({ readonly }) => (readonly ? '' : 'pointer')};
  }
`
// text-decoration: ${({ readonly }) => (readonly ? '' : 'underline')};
export const NumberItem = styled.div`
  font-size: 1.5rem;
  color: ${theme('banner.number')};
  &:hover {
    color: ${({ readonly }) => (readonly ? '' : theme('banner.active'))};
    animation: ${animate.pulseRule};
    cursor: ${({ readonly }) => (readonly ? '' : 'pointer')};
  }
`
export const NumberDivider = styled.div`
  border: 1px solid;
  border-color: ${theme('banner.numberDivider')};
  height: 70%;
  min-height: 40px;
  align-self: center;
  margin-left: 10px;
  margin-right: 10px;
`
