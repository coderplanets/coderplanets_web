import styled from 'styled-components'

import Img from '../../Img'
import { theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  max-width: 290px;
  display: flex;
  flex-direction: column;
  padding: 10px;
`
export const Header = styled.div`
  display: flex;
`
export const DiscussIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  width: 50px;
  height: 50px;
  margin-right: 15px;
  display: block;
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
`
export const Title = styled.div`
  font-size: 1rem;
  color: ${theme('thread.articleTitle')};
  margin-bottom: 5px;
  margin-left: -8px;
`
export const Body = styled.div`
  font-size: 0.8rem;
  color: ${theme('thread.articleDigest')};
`

export const Divider = styled.div`
  border-bottom: 1px solid;
  width: 100%;
  border-bottom-color: ${theme('thread.articleDigest')};
  opacity: 0.4;
  margin-top: 10px;
  margin-bottom: 6px;
`
export const Footer = styled.div`
  display: flex;
  align-items: center;
`
export const GithubIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  margin-left: 5px;
  margin-right: 6px;
  display: block;
  width: 15px;
  height: 15px;
  ${Footer}:hover & {
    fill: ${theme('thread.articleTitle')};
  }
  transition: color 0.2s;
`

export const IssueLink = styled.a`
  color: ${theme('banner.title')};
  ${cs.truncate('230px')};

  transition: color 0.2s;
  &:hover {
    color: ${theme('banner.title')};
    text-decoration: underline;
    cursor: pointer;
  }
  ${Footer}:hover & {
    color: ${theme('banner.title')};
    text-decoration: underline;
    cursor: pointer;
  }
`
