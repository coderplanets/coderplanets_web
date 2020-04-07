import styled from 'styled-components'

import Img from '@components/Img'

import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-start', 'justify-center')};
  width: 40%;
  height: 100%;
`
export const Card = styled.div`
  ${cs.flexColumn('justify-between')};
  width: 500px;
  height: 160px;
  background: #023744;
  padding: 14px 20px;
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
  margin-left: 15px;
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
`
export const UpInfo = styled.div`
  ${cs.flexColumn('justify-center')};
`
export const UpIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  width: 20px;
  height: 20px;
  display: block;
`
export const UpNumber = styled.div`
  color: ${theme('thread.articleDigest')};
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
