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
export const Title = styled.div`
  font-weight: bold;
  color: ${theme('thread.articleTitle')};
`

export const HeaderShadow = styled.div`
  box-shadow: -1px 3px 6px 2px rgba(0, 0, 0, 0.42);
  box-shadow: ${({ dropShadow }) =>
    dropShadow ? '-1px 3px 6px 2px rgba(0, 0, 0, 0.42)' : 'none'};
`
