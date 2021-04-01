import styled from 'styled-components'

// import type { TTestable } from '@/spec'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  background: #08303e;
  padding: 15px 20px;
  width: auto;
  height: auto;
  min-width: 400px;
  margin-bottom: 30px;
  border-radius: 4px;
`
export const Header = styled.div`
  ${css.flex('align-baseline', 'justify-between')};
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 16px;
`
export const TeamScale = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
`
export const Info = styled.div`
  ${css.flex('align-center')};
  margin-top: 6px;
  margin-bottom: 10px;
`
export const Sallery = styled.div`
  font-size: 14px;
  color: #009b9c;
  margin-right: 10px;
`
export const Body = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 15px;
`
export const Footer = styled.div`
  width: 100%;
  ${css.flex('align-center', 'justify-between')};
  margin-top: 20px;
`
export const Publisher = styled.div`
  ${css.flex('align-center')};
`
export const Avatar = styled(Img)`
  ${css.circle(22)};
`
export const PublisherInfo = styled.div`
  ${css.flexColumn()};
  margin-left: 14px;
`
export const AuthorName = styled.div`
  font-size: 14px;
  color: ${theme('thread.articleTitle')};
`
export const PublishExtra = styled.div`
  ${css.flex('align-center')};
`
export const TechKeywords = styled.div`
  ${css.flex('align-center')};
`
export const Keyword = styled.a`
  color: ${theme('thread.articleTitle')};
  margin-right: 8px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`
