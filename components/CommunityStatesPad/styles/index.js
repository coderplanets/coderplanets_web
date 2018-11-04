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
    background: ${({ dead }) => (dead ? '' : theme('banner.numberHoverBg'))};
  }
`
// text-decoration: ${({ dead }) => (dead ? '' : 'underline')};
export const NumberTitle = styled.div`
  color: ${theme('banner.numberDesc')};
  &:hover {
    color: ${({ dead }) => (dead ? '' : theme('banner.active'))};
    animation: ${animate.pulse} 0.4s linear;
    cursor: ${({ dead }) => (dead ? '' : 'pointer')};
  }
`
// text-decoration: ${({ dead }) => (dead ? '' : 'underline')};
export const NumberItem = styled.div`
  font-size: 1.5rem;
  color: ${theme('banner.number')};
  &:hover {
    color: ${({ dead }) => (dead ? '' : theme('banner.active'))};
    animation: ${animate.pulse} 0.4s linear;
    cursor: ${({ dead }) => (dead ? '' : 'pointer')};
  }
`
export const NumberDivider = styled.div`
  border: 1px solid;
  border-color: ${theme('banner.numberDivider')};
  height: 70%;
  align-self: center;
  margin-left: 10px;
  margin-right: 10px;
`
