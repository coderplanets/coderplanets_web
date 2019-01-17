import styled from 'styled-components'

import Img from '../../Img'
import { theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flex()};

  margin-bottom: 5px;
  width: 100%;
`
export const Main = styled.div`
  ${cs.flexColumn()};
  flex-grow: 1;
`
export const TopHalf = styled.div`
  ${cs.flex()};
  line-height: 1;
`
export const SecondHalf = styled.div`
  margin-left: 10px;
  margin-top: -3px;
`
export const TagsWrapper = styled.div`
  margin-top: 2px;
`
export const CompanyLogo = styled(Img)`
  width: 45px;
  height: 45px;
  border-radius: 5px;
  opacity: ${theme('avatarOpacity')};
  display: block;
`
export const Breif = styled.div`
  ${cs.flex('align-center')};
  flex-grow: 1;
  margin-left: 10px;
  margin-bottom: 10px;
  color: ${theme('thread.articleTitle')};
`

export const Title = styled.div`
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
export const Extra = styled.div`
  ${cs.flex('align-center')};
  opacity: 0.8;
  transition: opacity 0.2s;
  font-size: 0.9rem;
  margin-top: 3px;
  color: ${theme('thread.extraInfo')};
`
export const Salary = styled.div`
  color: ${theme('contrastFg')};
  margin-left: 7px;
  font-weight: bold;
  font-size: 0.9rem;
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
