import styled from 'styled-components'

import Img from '@Img'
import { cs, theme } from '@utils'

import { WrapperBase, BlockBase, ImageBase } from './index'

export const Wrapper = styled(WrapperBase)``

export const Block = styled(BlockBase)`
  width: 100%;
`
export const ImageWrapper = styled.div`
  height: auto;
`
export const Image = styled(ImageBase)``

export const Intro = styled.div`
  ${cs.flexColumn()};
  padding: 10px;
  padding-left: 0;
`

export const IntroHead = styled.div`
  ${cs.flex('align-center')};
  &:hover {
    cursor: pointer;
  }
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 20px;
  cursor: pointer;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  margin-top: -15px;
  height: 65px;
  opacity: 0.9;
  cursor: pointer;

  ${Block}:hover & {
    color: ${theme('thread.articleTitle')};
    opacity: 1;
  }
  transition: all 0.25s;
`
export const Footer = styled.div`
  ${cs.flex('align-center')}
  justify-content: space-between;
  margin-top: 5px;
  &:hover {
    cursor: pointer;
  }
`
export const UpvoteInfo = styled.div`
  ${cs.flex('align-center')};
`
export const ViewInfo = styled(UpvoteInfo)`
  opacity: 0.8;

  ${Block}:hover & {
    opacity: 1;
  }
`
const FooterIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 16px;
  height: 16px;
  display: block;
`
export const UpVoteIcon = styled(FooterIcon)`
  margin-top: -1px;
`
export const ViewIcon = styled(FooterIcon)`
  margin-top: -2px;
`
export const Number = styled.div`
  font-size: 12px;
  margin-left: 5px;
`
