import styled from 'styled-components'

import Img from '@Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  color: ${theme('thread.articleDigest')};
  background: #022935;
  border: 1px solid;
  height: 75px;
  border-color: #013648;
  overflow: hidden;
`
// see: https://stackoverflow.com/questions/16670931/hide-scroll-bar-but-while-still-being-able-to-scroll
export const InnerWrapper = styled.div`
  ${cs.flex()};
  width: 100%;
  overflow-y: scroll;
  height: 100%;
  padding-bottom: 17px;
  box-sizing: content-box;
`
export const Header = styled.div`
  ${cs.flex()};
  color: ${theme('thread.articleDigest')};
`

export const Block = styled.div`
  ${cs.flexColumn('align-both')};
  padding: 10px 2px;

  border-left: ${({ leftBorder }) => (leftBorder ? '1px solid' : 'none')};
  border-left-color: ${({ leftBorder }) => (leftBorder ? '#327FAF' : 'none')};

  border-right: ${({ rightBorder }) => (rightBorder ? '1px solid' : 'none')};
  border-right-color: ${({ rightBorder }) =>
    rightBorder ? '#327FAF' : 'none'};
  border-radius: 2px;

  &:hover {
    cursor: pointer;
    background: #05303e;
  }
`
export const Icon = styled(Img)`
  display: block;
  width: 35px;
  height: 35px;
  border-radius: 50%;
`
export const Title = styled.div`
  ${cs.truncate('60px')};
  text-align: center;
  padding-left: 5px;
  color: ${theme('thread.articleDigest')};
`
