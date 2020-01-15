import styled from 'styled-components'

// import Img from '@Img'
import { cs, theme } from '@utils'

const bgColor = '#02303e'

export const Wrapper = styled.div`
  width: 320px;
  color: ${theme('thread.articleDigest')};
  /* background: #02303e; */
  height: 90vh;
  overflow: scroll;
  margin-right: 15px;
  flex-shrink: 0;
  border: 1px solid;
  border-color: ${bgColor};
  background-color: ${bgColor};
`
export const Header = styled.div`
  ${cs.flex()};
  padding: 10px;
  color: ${theme('thread.articleDigest')};
  border-top: 1px solid;
  border-top-color: ${theme('logoText')};
`
export const Footer = styled.div`
  width: 100%;
  border-bottom: 1px solid;
  border-bottom-color: ${theme('logoText')};
`
export const Title = styled.div`
  font-weight: bold;
  color: ${theme('thread.articleTitle')};
`
