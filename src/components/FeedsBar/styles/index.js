import styled from 'styled-components'

import Img from '@Img'
import { cs, theme } from '@utils'

const bgColor = '#02303e'

export const Wrapper = styled.div`
  width: 320px;
  color: ${theme('thread.articleDigest')};
  /* background: #02303e; */
  /* height: 90vh; */
  height: 100%;
  margin-right: 15px;
  flex-shrink: 0;
  border: 1px solid;
  border-color: ${bgColor};
  background-color: ${bgColor};
  border-radius: 3px;
  overflow-y: hidden;
`
export const Header = styled.div`
  position: relative;
  ${cs.flex('align-center')};
  padding: 6px 8px 5px 0;
  color: ${theme('thread.articleDigest')};
`
export const FunctionIcon = styled(Img)`
  width: 18px;
  height: 18px;
  fill: ${theme('thread.articleDigest')};
  &:hover {
    fill: ${theme('thread.articleTitle')};
    cursor: pointer;
  }
`
export const Title = styled.div`
  position: absolute;
  top: -2px;
  left: 0;
  background: #0d4152;
  padding: 2px 10px;
  color: #92a4a5;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  ${Wrapper}:hover & {
    font-weight: bold;
  }
  transition: all 0.25s;
`
// color: #cecece;
// padding: 8px 10px;
// color: #cecece;
// background: #006f74;
