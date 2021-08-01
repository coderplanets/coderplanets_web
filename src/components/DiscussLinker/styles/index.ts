import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  max-width: 300px;
  width: 100%;
  padding: 10px;
`
export const Header = styled.div`
  ${css.flex()};
`
export const DiscussIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  ${css.size(50)};
  margin-right: 15px;
`
export const Info = styled.div`
  ${css.flexColumn()};
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
  ${css.flex('align-center')};
`
export const GithubIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  margin-left: 5px;
  margin-right: 6px;
  ${css.size(15)};
  ${Footer}:hover & {
    fill: ${theme('thread.articleTitle')};
  }
  transition: color 0.2s;
`

export const IssueLink = styled.a`
  color: ${theme('banner.title')};
  ${css.cutRest('230px')};

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
