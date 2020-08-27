import styled from 'styled-components'

import Img from '@/Img'
import { Button } from '@/components/Buttons'
import { cs, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${cs.flex('align-both')};
  padding-left: 5%;
  margin-top: 10%;
`
export const InnerWrapper = styled.div`
  ${cs.flexColumn('align-start')};
`
export const SubscribeBtn = styled(Button)`
  height: 42px;
  width: 210px;
`
export const SubscribeIcon = styled(Img)`
  fill: ${theme('button.fg')};
  display: block;
  width: 12px;
  height: 12px;
  margin-right: 8px;
`
export const Desc = styled.div`
  ${cs.flex('justify-center')};
  width: 100%;
  margin-top: 20px;
  color: ${theme('thread.articleDigest')};
  letter-spacing: 1px;
`
