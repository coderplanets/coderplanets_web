import styled from 'styled-components'
import { theme } from '../../utils/themes'

export const Center = styled.div`
  /* display: flex;*/
  /* align-items: center;*/
  /* justify-content: center;*/
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`
export const HorizontalCenter = styled.div`
  text-align: center;
`

export const Title = styled.div`
  font-size: 3vh;
  color: ${theme('font')};
  transition: color 0.3s;
`
export const Ul = styled.ul`
  list-style: none; /* Remove list bullets */
  padding: 0;
  margin: 0;
  color: ${theme('font')};
`
export const Li = styled.li`
  padding-left: 16px;
  margin-bottom: 8px;
  &:before {
    content: '•'; /* Insert content that looks like bullets */
    padding-right: 8px;
    color: ${theme('font')};
  }
`

export const Mark = styled.span`
  backgroun: lightgrey;
`

export const Margin = styled.div`
  margin-top: ${props => (props.top ? props.top : 0)};
  margin-bottom: ${props => (props.bottom ? props.bottom : 0)};
  margin-left: ${props => (props.left ? props.left : 0)};
  margin-right: ${props => (props.right ? props.right : 0)};
`
