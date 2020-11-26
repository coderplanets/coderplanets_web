import styled from 'styled-components'

import { theme, css } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.article`
  ${css.flex()};

  position: relative;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 4px;
  opacity: ${({ opacity }) => opacity};

  transition: all 0.25s;
`
export const PosterWrapper = styled.div`
  position: relative;
  height: 138px;
  width: 246px;

  ${css.media.mobile`
    height: 118px;
    width: 136px;
  `};
`
export const Poster = styled.img`
  height: 100%;
  width: 100%;
  min-width: 246px;
  opacity: ${theme('avatarOpacity')};

  ${css.media.mobile`
    min-width: 146px;
`};
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
  ${css.flexColumnGrow()};
  margin-left: 10px;
`
export const TopHalf = styled.div`
  ${css.flex()};
`
export const SecondHalf = styled.ul`
  margin-left: 10px;
  margin-top: -10px;
  flex-grow: 1;
`
export const Brief = styled.div`
  ${css.flexGrow('align-center')};
  margin-left: 10px;
  margin-bottom: 10px;
  color: ${theme('thread.articleTitle')};
`
export const ViewInfo = styled.div`
  ${css.flex()};
`
export const ViewIcon = styled(Img)`
  fill: ${theme('thread.articleLink')};
  ${css.size(10)};
`
export const Extra = styled.li`
  ${css.flex('align-center')};

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

  ${css.media.mobile`
    ${css.cutFrom('200px')};
  `};
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
  ${css.flex()};
  margin-left: 10px;
  margin-bottom: 2px;
`
export const ButtonAvatar = styled(Img)`
  ${css.circle(20)};
  opacity: 0.8;
`
export const ButtonNickname = styled.div`
  color: ${theme('thread.articleDigest')};
  margin-left: 5px;
`
export const InsertTime = styled.div`
  ${css.flex('align-center')};
  font-size: 0.8rem;
  color: ${theme('thread.articleDigest')};
  margin-top: 1px;
  margin-left: 2px;
`
