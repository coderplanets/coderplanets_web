import styled from 'styled-components'

import Img from '@/Img'
import { cs, theme } from '@/utils'

export const Wrapper = styled.div`
  position: relative;
  ${cs.flex('align-center')};
  height: 125px;
  width: 100%;
  padding: 12px 30px;
  padding-right: 38px;
  padding-top: 0;
  border-bottom: 1px solid #0b4152;
  border-radius: 5px;
  &:hover {
    background: #0b2f3a;
  }
  :last-child {
    border-bottom: none;
  }
  transition: all 0.25s;
  /* border: 1px solid tomato; */
`
export const IntroImg = styled(Img)`
  width: 70px;
  height: 70px;
  display: block;
  border-radius: 5px;
  margin-top: 2px;
`
export const IntroBlock = styled.div`
  ${cs.flexColumnGrow('align-start', 'justify-between')};
  margin-left: 25px;
  /* border: 1px solid green; */
`
export const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${theme('thread.articleTitle')};
`
export const TypeTags = styled.div`
  ${cs.flex('align-center')};
  font-size: 14px;
  color: ${theme('thread.articleDigest')};
  height: 32px;
`
export const ExtraInfo = styled.div`
  ${cs.flexColumn('align-end', 'justify-around')};
  height: 100%;
`
export const UpInfo = styled.div`
  ${cs.flex('align-center')};
`
export const UpIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  width: 15px;
  height: 15px;
  display: block;
  margin-right: 8px;
`
export const UpNumber = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 15px;
`
export const BodyText = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 13px;
  ${cs.truncate('550px')};
  margin-top: 5px;
  margin-bottom: 15px;
`
export const FooterWrapper = styled.div`
  ${cs.flex('align-center', 'justify-between')};
  color: ${theme('thread.articleDigest')};
  width: 100%;
  font-size: 12px;
  margin-left: -3px;
`
export const Divider = styled.div`
  margin-right: 22px;
`
export const BuildWithWrapper = styled.div`
  ${cs.flex('align-center')};
  padding: 2px 5px;
  background: linear-gradient(180deg, transparent 48%, rgb(13, 55, 70) 0);
  margin-top: -4px;
`
export const CommentSlash = styled.div`
  font-size: 10px;
  margin-left: 7px;
  margin-right: 5px;
`
export const PublishAt = styled.div`
  font-size: 12px;
`
const BaseBuildIcon = styled(Img)`
  width: 14px;
  height: 14px;
  display: block;
`
export const TechIcon = styled(BaseBuildIcon)`
  margin-right: 5px;
  filter: saturate(0.8);

  ${Wrapper}:hover & {
    filter: saturate(1);
  }
`
export const GithubIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  width: 13px;
  height: 13px;
  display: block;
  margin-right: 3px;
`
