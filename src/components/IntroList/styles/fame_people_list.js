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
  height: 280px;
  border: 1px solid;
  border-left: none;
  border-right: ${({ borderRight }) => (borderRight ? '1px solid' : 'none')};
  border-top: ${({ borderTop }) => (borderTop ? '1px solid' : 'none')};
  border-color: #0d4353;
  padding: 15px;
  padding-left: 24px;

  :last-child {
    border-right: none;
  }
  &:hover {
    background: #04313e;
    border-color: #074c61;
  }
  transition: all 0.25s;
`
export const Header = styled.div`
  ${cs.flexColumn()};
`
export const LinkHead = styled.div`
  ${cs.flex('align-center')};
  justify-content: space-between;
  font-size: 12px;
  margin-bottom: 15px;
`
export const NationsWrapper = styled.div`
  ${cs.flex('align-center')};
  opacity: 0.8;
  ${Block}:hover & {
    opacity: 1;
  }
  transition: all 0.25s;
`
export const NationFlag = styled(Img)`
  width: 16px;
  display: block;
  border-radius: 3px;
  margin-right: ${({ marginRight }) => (marginRight ? '5px' : '0')};
`
export const IntroHead = styled.div`
  ${cs.flex('align-center')};
  &:hover {
    cursor: pointer;
  }
`
export const Icon = styled(Img)`
  ${cs.circle('54px')};
`
export const BasicInfo = styled.div`
  ${cs.flexColumn()};
  margin-left: 12px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 18px;
  cursor: pointer;
  ${cs.truncate('200px')};
`
export const Birthday = styled.div`
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  height: 65px;
  opacity: 0.9;
  cursor: pointer;

  ${Block}:hover & {
    color: ${theme('thread.articleTitle')};
    opacity: 1;
  }
  transition: all 0.25s;
`
export const ExpWrapper = styled.div`
  ${cs.flex('align-center')}
  margin-top: -10px;
`
export const EduWrapper = styled.div`
  ${cs.flex('align-center')}
`
export const ExpIcon = styled(Img)`
  width: 16px;
  height: 16px;
  display: block;
  margin-right: 5px;
  filter: saturate(0);

  ${Block}:hover & {
    filter: saturate(1);
  }
`
export const Footer = styled.div`
  ${cs.flex('align-center')}
  justify-content: space-between;
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
