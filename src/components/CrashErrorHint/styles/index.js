import styled from 'styled-components'

// import Img from '@Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div.attrs(props => ({
  'data-testid': props.testid,
}))`
  ${cs.flexColumn('align-center', 'justify-between')};
  height: 100vh;
  width: 100%;
  color: #6B7F83;
  background: #072d3a;

  /* background: ${theme('thread.bg')}; */
`
export const Header = styled.div`
  ${cs.flex()};
`
export const Title = styled.div`
  font-size: 30px;
  color: #7b8f90;
  border-bottom: 1px solid;
  border-bottom-color: #7b8f90;
  padding-bottom: 15px;
  margin-bottom: 12px;
`
export const UL = styled.ul`
  margin-left: -22px;
`
export const Li = styled.li`
  margin-top: 4px;
`
export const Action = styled.span`
  color: #4eaba7;
  margin-left: 3px;
  margin-right: 3px;

  &:hover {
    font-weight: bold;
    cursor: pointer;
    text-decoration: ${({ noUnderline }) =>
      noUnderline ? 'none' : 'underline'};
  }
`
export const Footer = styled.div`
  margin-bottom: 26px;
`
