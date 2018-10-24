import styled from 'styled-components'

import Img from '../../Img'
import { theme } from '../../../utils'

export const Wrapper = styled.article`
  position: relative;
  display: flex;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 4px;
  opacity: ${({ opacity }) => opacity};

  &:hover {
    background: ${theme('thread.articleHover')};
  }
`
export const ReadedLabel = styled.div`
  position: absolute;
  top: 15px;
  left: -30px;
  font-size: 0.75rem;
  color: ${theme('thread.articleDigest')};
  opacity: 0.8;
`
export const PosterWrapper = styled.div`
  position: relative;
  height: 138px;
  width: 246px;
`
export const Poster = styled.img`
  height: 100%;
  width: 100%;
  min-width: 246px;
  opacity: ${theme('avatarOpacity')};
`
export const Duration = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background: #2e2e2f;
  color: white;
  font-size: 0.8rem;
  padding: 0 4px;
`
export const Title = styled.div`
  margin-bottom: 10px;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
  }

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
export const Main = styled.div`
  margin-left: 10px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`
export const TopHalf = styled.div`
  display: flex;
`
export const SecondHalf = styled.ul`
  margin-left: 10px;
  margin-top: -10px;
  flex-grow: 1;
`
export const Breif = styled.div`
  display: flex;
  flex-grow: 1;
  margin-left: 10px;
  color: ${theme('thread.articleTitle')};
`
export const ViewInfo = styled.div`
  display: flex;
`
export const ViewIcon = styled(Img)`
  fill: ${theme('thread.articleLink')};
  width: 10px;
  height: 10px;
  display: block;
`
export const Extra = styled.li`
  display: flex;
  align-items: center;
  opacity: 0.8;
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
  &:hover {
    cursor: pointer;
  }
`
export const OriginalAuthorLink = styled.a`
  transition: color 0.3s;
  color: ${theme('thread.extraInfo')};

  &:hover {
    cursor: pointer;
    color: ${theme('thread.extraInfo')};
    text-decoration: underline;
  }
`
export const BottomAuthorWrapper = styled.div`
  display: flex;
  margin-left: 10px;
  margin-bottom: 2px;
`
export const ButtonAvatar = styled(Img)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  opacity: 0.8;
  display: block;
`
export const ButtonNickname = styled.div`
  color: ${theme('thread.articleDigest')};
  margin-left: 5px;
`
export const InsertTime = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: ${theme('thread.articleDigest')};
  margin-top: 1px;
  margin-left: 2px;
`
