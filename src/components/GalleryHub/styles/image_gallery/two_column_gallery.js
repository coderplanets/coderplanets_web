import styled from 'styled-components'

import Img from '@Img'
import { cs, theme } from '@utils'

import { WrapperBase, BlockBase, ImageBase } from './index'

export const Wrapper = styled(WrapperBase)``

export const Block = styled(BlockBase)`
  width: 50%;
`
export const ImageWrapper = styled.div`
  height: 240px;
`
export const Image = styled(ImageBase)``

export const Intro = styled.div`
  ${cs.flexColumn()};
  padding: 10px;
  padding-left: 0;
`
export const IntroHead = styled.div`
  width: 100%;
  ${cs.flex('align-center')};
  justify-content: space-between;
  &:hover {
    cursor: pointer;
  }
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 16px;
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
export const FlagIcon = styled(Img)`
  width: 15px;
  display: block;
`

const FooterIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 16px;
  height: 16px;
  display: block;
`
// TODO:  extract
export const ViewInfo = styled.div`
  ${cs.flex('align-center')};
  opacity: 0.8;

  ${Block}:hover & {
    opacity: 1;
  }
`
export const ViewIcon = styled(FooterIcon)`
  margin-top: -2px;
`
export const Number = styled.div`
  font-size: 12px;
  margin-left: 5px;
`
