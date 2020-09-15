import styled from 'styled-components'

import { theme, cs } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.article`
  ${cs.flex()};
  position: relative;
  padding-left: 3px;
  padding-right: 0;
  border-radius: 4px;
  opacity: ${({ opacity }) => opacity};

  padding-top: ${({ divider }) => (divider ? '10px' : '6px')};
  padding-bottom: ${({ divider }) => (divider ? '10px' : '6px')};
  border-bottom: ${({ divider }) => (divider ? '1px solid' : '0')};
  border-bottom-color: ${theme('thread.articleDivider')};

  &:hover {
    background: ${({ hover }) => (hover ? theme('thread.articleHover') : '')};
  }
  transition: all 0.25s;
`
export const Main = styled.div`
  ${cs.flexColumnGrow()};
`
export const TopHalf = styled.div`
  ${cs.flexColumn()};
`
export const SecondHalf = styled.div`
  margin-left: 10px;
  margin-top: -10px;
`
export const AvatarWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`
export const Avatar = styled(Img)`
  ${cs.circle('36px')};
  fill: ${theme('thread.articleTitle')};
  opacity: ${theme('avatarOpacity')};
  display: block;
  margin-top: 2px;

  ${cs.media.mobile`
    ${cs.circle('30px')};
    margin-top: 12px;
  `};
`
export const AvatarFallback = styled.div`
  ${cs.flex('align-both')};
  ${cs.circle('38px')};
  font-size: 20px;
  color: ${theme('thread.articleTitle')};
  background-color: #164858; /*${theme('thread.articleHover')}; */
`
export const SmallAvatar = styled(Avatar)`
  width: 35px;
  height: 35px;
`
export const HeaderInfo = styled.div`
  ${cs.flex('align-end', 'justify-between')};
  color: ${theme('thread.articleDigest')};
  margin-left: 10px;
  margin-bottom: 3px;
`
export const AuthorInfo = styled.div`
  ${cs.flex('align-center')};
`
export const CommunityInfo = styled.div`
  color: ${theme('thread.articleTitle')};
  background: #133f4e;
  font-size: 11px;
  border-radius: 5px;
  padding: 0 5px;
  margin-bottom: 1px;
  margin-left: -4px;
`
export const TimeStamp = styled.div`
  font-size: 12px;
  margin-top: 2px;
`
export const Brief = styled.div`
  ${cs.flexGrow('align-center')};
  margin-bottom: 10px;
  margin-left: 10px;
  color: ${theme('thread.articleTitle')};
  &:hover {
    cursor: pointer;
  }
`
export const Title = styled.div`
  font-size: 15.5px;
  @media (max-width: 1450px) {
    max-width: 500px;
  }
  @media (max-width: 1250px) {
    max-width: 450px;
  }
  @media (max-width: 1100px) {
    max-width: 350px;
  }
`
export const TitleLink = styled.div`
  position: relative;
  font-size: 15px;
  margin-top: -1px;
  color: ${theme('thread.articleLink')};
  margin-left: 10px;
  opacity: 0.8;
  text-decoration: underline;
`
export const LinkIcon = styled(Img)`
  fill: ${theme('thread.articleLink')};
  position: absolute;
  top: 6px;
  left: -5px;
  width: 12px;
  height: 12px;
`
export const Extra = styled.li`
  ${cs.flex('align-center')};
  margin-top: 5px;
  margin-bottom: 4px;
  transition: opacity 0.2s;
  font-size: 13px;
  color: ${theme('thread.extraInfo')};
`
export const ExtraIcon = styled(Img)`
  fill: #28a49b;
  display: block;
  width: 15px;
  height: 15px;
  margin-right: 4px;
  opacity: 0.8;
`
export const ExtraTexts = styled.div`
  ${cs.flex('align-center')};
  opacity: 0.7;
`
export const BodyDigest = styled.li`
  margin-top: 5px;
  color: ${theme('thread.articleDigest')};
  white-space: normal;
  display: block;
  font-size: 13px;
  max-width: 96%;
`
export const CommentWrapper = styled.div`
  ${cs.flex('align-center')};
  align-self: flex-start;
`
export const CommentIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 14px;
  height: 14px;
  margin-right: 4px;
  display: block;
`
export const CommentNum = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 0.9rem;
`
export const TagListWrapper = styled.div`
  margin-right: -3px;
`
export const PublishLabel = styled.span`
  display: inline;
  ${cs.media.mobile`
    display: none;
    margin-left: 3px;
  `};
`
