import styled from 'styled-components'

import { cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-both')};
  width: 100vw;
  height: 100vh;
  background: #003b48;
`
export const InnerWrapper = styled.div`
  ${cs.flexColumn('align-center')};
  border: 1px solid;
  height: 100%;
  width: 100%;
  color: #90a3a4;
`
export const Body = styled.div`
  ${cs.flexColumn('align-both')};
  flex-grow: 1;
`
export const Title = styled.div`
  font-size: 25px;
  color: #90a3a4;
  margin-bottom: 10px;
`
export const Desc = styled.div`
  margin-top: 6px;
  font-size: 15px;
  color: #90a3a4;
  opacity: 0.8;
`
export const Link = styled.a`
  font-size: 17px;
  color: #129698;
  text-decoration: underline;
  &:hover {
    color: #129698;
    text-decoration: underline;
  }
`

export const Footer = styled.div`
  ${cs.flex('align-both')};
  height: 100px;
  width: 100%;
`
