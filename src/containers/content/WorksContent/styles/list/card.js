import styled from 'styled-components'

import Img from '@Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('justify-between')};
  height: 160px;
  width: calc(50% - 10px);
  padding: 14px 16px;
  background: #003743;
  margin-bottom: 14px;
  margin-right: 15px;
  border-radius: 5px;

  &:nth-child(even) {
    margin-right: 0;
  }
`
export const IntroWrapper = styled.div`
  ${cs.flex('align-center')};
`
export const IntroImg = styled(Img)`
  width: 65px;
  height: 65px;
  display: block;
  border-radius: 5px;
`
export const IntroBlock = styled.div`
  ${cs.flexColumnGrow('align-start')};
  margin-left: 20px;
`
export const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${theme('thread.articleTitle')};
`
export const Desc = styled.div`
  ${cs.flex('align-center')};
  font-size: 14px;
  color: ${theme('thread.articleDigest')};
  height: 32px;
`
export const UpInfo = styled.div`
  ${cs.flexColumn('justify-center')};
  align-self: flex-start;
  margin-top: 5px;
`
export const UpIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  width: 20px;
  height: 20px;
  display: block;
`
export const UpNumber = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 16px;
`
export const BodyText = styled.div`
  font-size: 14px;
  ${cs.truncate('350px')};
  color: ${theme('thread.articleDigest')};
`
export const FooterWrapper = styled.div`
  ${cs.flex('align-center', 'justify-between')};
  color: ${theme('thread.articleDigest')};
`
export const BuildWithWrapper = styled.div`
  ${cs.flex('align-center')};
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
