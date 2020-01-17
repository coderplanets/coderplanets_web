import styled from 'styled-components'

import Img from '@Img'
import { cs, theme } from '@utils'

const bgColor = '#02303e'

export const Wrapper = styled.div`
  width: 320px;
  color: ${theme('thread.articleDigest')};
  /* background: #02303e; */
  height: 90vh;
  margin-right: 15px;
  flex-shrink: 0;
  border: 1px solid;
  border-color: ${bgColor};
  background-color: ${bgColor};
  border-radius: 3px;
  overflow-y: scroll;
`
export const Header = styled.div`
  ${cs.flex('align-center')};
  padding: 10px;
  padding-left: 0px;
  padding-right: 5px;
  color: ${theme('thread.articleDigest')};
  border-top: 1px solid;
  border-top-color: ${theme('logoText')};
`
export const NumIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 20px;
  height: 20px;
  display: block;
`
export const FunctionIcon = styled(NumIcon)`
  width: 18px;
  height: 18px;
  &:hover {
    fill: ${theme('thread.articleTitle')};
    cursor: pointer;
  }
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

// box-shadow: ${({ dropShadow }) =>
// dropShadow ? theme('sidebar.headerShadow') : 'none'};
// border-bottom: ${({ dropShadow }) =>
// dropShadow ? theme('sidebar.headerShadowBorderBottom') : ''};
export const HeaderShadow = styled.div`
  position: relative;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);

  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.8);
    bottom: 0px;
    left: 10%;
    right: 10%;
    width: 80%;
    height: 50%;
    border-radius: 100%;
  }
`
