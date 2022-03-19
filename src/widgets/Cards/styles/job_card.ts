import styled from 'styled-components'

// import type { TTestable } from '@/spec'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  background: #08303e;
  padding: 24px 22px;
  width: auto;
  height: auto;
  min-width: 400px;
  margin-bottom: 30px;
  border-radius: 10px;
`
export const Header = styled.div`
  ${css.flex('align-baseline', 'justify-between')};
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 16px;
`
export const ShareIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(13)};
  margin-right: 4px;
  opacity: 0;

  ${Wrapper}:hover & {
    opacity: 1;
  }

  transition: opacity 0.3s;
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
  ${css.flex('align-end', 'justify-between')};
  margin-top: 20px;
`
export const PublisherInfo = styled.div`
  ${css.flexColumn('align-end')};
`
export const AuthorName = styled.div`
  font-size: 14px;
  color: ${theme('thread.articleDigest')};
  margin-bottom: 3px;
`
export const PublishExtra = styled.div`
  ${css.flex('align-center')};
`
export const PublishTime = styled.div`
  font-size: 11px;
  color: ${theme('thread.articleDigest')};
`
export const TechstackWrapper = styled.div`
  ${css.flexColumn()};
`
export const TechTitle = styled.div`
  font-size: 11px;
  color: ${theme('thread.articleDigest')};
  margin-bottom: 2px;
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
export const ImagesWrapper = styled.div`
  ${css.flex('align-center')};
  width: 80%;
  margin-top: 24px;
  margin-bottom: 6px;
`
export const PreviewImage = styled(Img)`
  width: auto;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 12px;
`
