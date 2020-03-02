import styled from 'styled-components'

import { cs, theme } from '@utils'
import Img from '@Img'

// import Img from '@components/Img'

export const Wrapper = styled.div`
  ${cs.flex('justify-between')};
  width: 700px;
  margin-top: 60px;
  min-height: 300px;
`
const Block = styled.div`
  padding: 15px;
  width: 45%;
  ${cs.flexColumn('align-start')};
`
export const LeftBlock = styled(Block)`
  padding-left: 0;
`
export const RightBlock = styled(Block)`
  padding-right: 0;
  padding-left: 40px;
`
export const Header = styled.div`
  ${cs.flex('align-center')};
  margin-bottom: 18px;
`
const Icon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  display: block;
  width: 16px;
  height: 16px;
  margin-right: 10px;
`
export const FaqIcon = styled(Icon)`
  margin-top: -1px;
`
export const DemoIcon = styled(Icon)`
  width: 18px;
  height: 18px;
  margin-top: -1px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 17px;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  line-height: 1.7;
`

export const CommunityDemoWrapper = styled.div`
  ${cs.flex('align-center')};
  flex-wrap: wrap;
  margin-left: 5px;
  margin-bottom: 5px;
`
