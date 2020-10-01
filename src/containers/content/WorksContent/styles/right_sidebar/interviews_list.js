import styled from 'styled-components'

import { cs, theme } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  /* ${cs.flex('align-start')}; */
  background: #0b2f3a;
  width: 100%;
  min-height: 200px;
  padding: 10px;
  margin-top: 10px;
`
export const InterviewWrapper = styled.div`
  ${cs.flex('align-start')};
  margin-bottom: 12px;
`
export const Avatar = styled(Img)`
  ${cs.circle('26px')};
  display: block;
  margin-top: 2px;
`
export const Intro = styled.div`
  ${cs.flexColumn()};
  margin-left: 8px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 13px;
`
export const Author = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
`
