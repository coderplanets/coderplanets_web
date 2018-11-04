import styled from 'styled-components'

import Img from '../../Img'
import { theme, cs } from '../../../utils'

export const Wrapper = styled.article`
  position: relative;
  display: flex;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 4px;
  opacity: ${({ opacity }) => opacity};

  padding-top: ${({ divider }) => (divider ? '10px' : '6px')};
  padding-bottom: ${({ divider }) => (divider ? '10px' : '6px')};
  border-bottom: ${({ divider }) => (divider ? '1px solid' : '0')};
  border-bottom-color: ${theme('thread.articleDivider')};

  &:hover {
    cursor: pointer;
    background: ${theme('thread.articleHover')};
  }
`
export const ReadedLabel = styled.div`
  position: absolute;
  top: 14px;
  left: -30px;
  font-size: 0.75rem;
  color: ${theme('thread.articleDigest')};
  opacity: 0.8;
`
export const Main = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`
export const TopHalf = styled.div`
  display: flex;
`
export const SecondHalf = styled.div`
  margin-left: 10px;
  margin-top: -10px;
`

export const Avatar = styled(Img)`
  ${cs.circle('42px')};
  opacity: ${theme('avatarOpacity')};
  display: block;
  margin-top: 2px;
`
export const SmallAvatar = styled(Avatar)`
  width: 35px;
  height: 35px;
`
export const Breif = styled.div`
  display: flex;
  flex-grow: 1;
  margin-left: 10px;
  color: ${theme('thread.articleTitle')};
`

export const Title = styled.div`
  margin-bottom: 10px;
  font-size: 1rem;
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
  font-size: 0.9rem;
  margin-top: 2px;
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
  display: inline;
  opacity: 0.7;
  transition: opacity 0.2s;
  font-size: 0.85rem;
  color: ${theme('thread.extraInfo')};
`
export const BodyDigest = styled.li`
  margin-top: 5px;
  color: ${theme('thread.articleDigest')};
  margin-right: 20px;
  white-space: normal;
  display: block;
  font-size: 0.85rem;
`
export const CommentWrapper = styled.div`
  display: flex;
  align-items: center;
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
