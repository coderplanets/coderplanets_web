import styled from 'styled-components'

import Img from '../../../components/Img'
import { theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flex()};
  padding: 20px 40px;
  background: ${theme('preview.articleBg')};
  min-height: 120px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
`
export const BaseInfo = styled.div`
  ${cs.flexColumnGrow()};
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 1.1rem;
  margin-bottom: 5px;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 0.9rem;
`
export const Footer = styled.div`
  ${cs.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  margin-top: 20px;
`
export const OriginAuthor = styled.div`
  font-size: 1rem;
`
export const OriginAuthorLink = styled.a`
  color: ${theme('thread.articleDigest')};
  font-weight: bold;
  transition: color 0.3s;
  margin-left: 2px;
  margin-right: 2px;
  &:hover {
    color: ${theme('banner.title')};
    text-decoration: underline;
    cursor: pointer;
  }
`
export const PublishTime = styled.div`
  font-size: 1rem;
`
export const OtherInfo = styled.div`
  ${cs.flexColumn('justify-between')};
`
export const Duration = styled.div`
  ${cs.flex('align-center')};
  justify-content: flex-end;
  color: ${theme('thread.articleDigest')};
  min-width: 120px;
`
export const DurationText = styled.div`
  font-size: 1rem;
`
export const DurationIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 16px;
  height: 16px;
  display: block;
  margin-top: -1px;
  margin-right: 5px;
`
export const Source = styled.div`
  ${cs.flex('align-center')};
  justify-content: flex-end;

  color: ${theme('thread.articleDigest')};
  font-size: 0.8rem;
  min-width: 120px;
  text-align: right;
`
