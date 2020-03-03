import styled from 'styled-components'

import Img from '@Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  ${cs.flex()};
  flex-wrap: wrap;
  color: ${theme('thread.articleDigest')};
  width: 100%;
`
export const Block = styled.div`
  ${cs.flexColumn('justify-between')};
  width: 33%;
  height: auto;
  border: 1px solid;
  border-top: ${({ borderTop }) => (borderTop ? '1px solid' : 'none')};
  border-left: none;
  border-right: none;
  border-bottom: 1px solid;
  border-color: #0d4353;
  padding: 5px;

  :last-child {
    border-right: none;
  }
  &:hover {
    background: #04313e;
    border-color: #074c61;
  }
  transition: all 0.25s;
`
export const ImageWrapper = styled.div`
  height: 200px;
`
export const Image = styled(Img)`
  height: 100%;
  width: 100%;
  object-position: center;
  object-fit: cover;
`

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
