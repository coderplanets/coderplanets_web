import styled from 'styled-components'

import Img from '@/Img'
import { cs, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${cs.flexColumn()};
  width: 280px;
  padding-left: 35px;
  margin-left: 5px;
  color: ${theme('thread.articleDigest')};
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 14px;
`
export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: #004353;
  margin-top: ${({ top }) => top || '25px'};
  margin-bottom: ${({ bottom }) => bottom || '15px'};
`
export const PublishIcon = styled(Img)`
  fill: ${theme('button.fg')};
  width: 16px;
  height: 16px;
  display: block;
  margin-right: 10px;
`
export const PublishBtnWrapper = styled.div`
  margin-left: 2px;
  margin-right: 2px;
`
