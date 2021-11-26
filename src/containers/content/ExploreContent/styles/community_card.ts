import styled from 'styled-components'

import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

const BaseCard = styled.div`
  ${css.flex()};

  position: relative;
  padding: 15px 20px;
  width: 250px;
  height: 150px;
  margin-right: 30px;
  background: #0c3442; // ${theme('content.cardBg')};
  border: 1px solid;
  border-color: ${theme('content.cardBorder')};
  border-radius: 12px;
`
export const Wrapper = styled(BaseCard)`
  margin-bottom: 60px;

  &:hover {
    cursor: pointer;
    border: 1px solid #327faf;
    box-shadow: 0px 7px 20px 10px rgba(0, 0, 0, 0.15); /* same with the popover */
  }

  transition: all 0.2s;
`
export const Left = styled.div`
  ${css.flexColumn('align-start')};
  width: 80px;
  margin-right: 10px;
`

export const Right = styled.div`
  width: calc(100% - 80px);
  ${css.flexColumn('align-start')};
  flex-flow: 1;
`
// fill only works for non-colored svgs
export const CommunityIcon = styled(Img)<{ nonFill: boolean }>`
  ${css.size(26)};
  fill: ${({ nonFill }) => (nonFill ? '' : theme('banner.desc'))};
  margin-bottom: 8px;
  ${Wrapper}:hover & {
    fill: ${({ nonFill }) => (nonFill ? '' : theme('banner.title'))};
  }
`
export const Raw = styled.div`
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
  opacity: 0.8;

  &:before {
    content: '/';
    margin-right: 2px;
  }
`
export const JoinWrapper = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  font-size: 13px;
`
export const ContentWrapper = styled(JoinWrapper)`
  margin-top: -30px;
`
export const Title = styled.a`
  margin-top: -2px;
  font-size: 18px;
  font-weight: bold;
  color: ${theme('thread.articleTitle')};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: #139c9e;
    cursor: pointer;
  }
`
export const Desc = styled.div`
  margin-top: 8px;
  color: ${theme('thread.articleDigest')};
  word-break: break-all;
  font-size: 13px;
  position: relative;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
`
export const ActivitySpark = styled.div`
  width: 80px;
  height: 60px;
  margin-left: -15px;
  margin-top: 8px;
`
export const Footer = styled.div`
  width: 100%;
  ${css.flex('align-center', 'justify-between')};
  /* border-top: 1px solid;
  border-top-color: ${theme('content.cardBorder')}; */
  padding-top: 15px;
`
export const Divider = styled.div`
  width: 90%;
  margin-top: 12px;
  border-top: 1px solid;
  border-top-color: ${theme('content.cardBorder')};
  margin-bottom: 5px;
`
