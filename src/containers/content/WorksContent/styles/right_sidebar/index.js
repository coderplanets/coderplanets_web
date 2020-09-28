import styled from 'styled-components'

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
  margin-top: 30px;
  margin-bottom: 40px;
`
export const PublishBtnWrapper = styled.div`
  margin-left: 16px;
  margin-right: 16px;
`
