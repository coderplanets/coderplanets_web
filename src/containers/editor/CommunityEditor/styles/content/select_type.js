import styled from 'styled-components'

import { css, theme } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flex('justify-between')};
  width: 700px;
  margin-top: 60px;
  min-height: 300px;
`
const Block = styled.div`
  padding: 15px;
  width: 45%;
  ${css.flexColumn('align-start')};
`
export const LeftBlock = styled(Block)`
  padding-left: 0;
`
export const RightBlock = styled(Block)`
  padding-right: 0;
  padding-left: 40px;
`
export const Header = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 18px;
`
const Icon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  ${css.size(16)};
  margin-right: 10px;
`
export const FaqIcon = styled(Icon)`
  margin-top: -1px;
`
export const DemoIcon = styled(Icon)`
  ${css.size(18)};
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
  ${css.flex('align-center')};
  flex-wrap: wrap;
  margin-bottom: 10px;
`
