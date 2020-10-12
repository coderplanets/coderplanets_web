import styled from 'styled-components'

import Img from '@/Img'
import { cs, theme } from '@/utils'

export const Wrapper = styled.div`
  background: #0b2f3a;
  position: relative;
  ${cs.flex('align-center')};
  height: 125px;
  width: 100%;
  padding: 12px 20px;
  padding-right: 25px;
  padding-top: 0;
  border-bottom: ${({ noBorder }) => (!noBorder ? '1px solid' : 'none')};
  border-bottom-color: #0b4152;
  border-radius: 5px;
  &:hover {
    background: #08333e;
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
export const IntroWrapper = styled.div`
  ${cs.flexColumnGrow('align-start', 'justify-between')};
  margin-left: 25px;
  /* border: 1px solid green; */
`
export const Header = styled.div`
  ${cs.flex('justify-between', 'align-start')};
  width: 100%;
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
export const UpInfo = styled.div`
  ${cs.flex('align-center')};
  margin-top: 4px;
`
export const UpIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  width: 14px;
  height: 14px;
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
  ${cs.cutFrom('380px')};
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
  margin-right: 18px;
`
export const BuildWithWrapper = styled.div`
  ${cs.flex('align-center')};
  padding: 2px 5px;
  background: linear-gradient(180deg, transparent 48%, rgb(13, 55, 70) 0);
  margin-top: -4px;
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
