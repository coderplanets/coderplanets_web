import styled from 'styled-components'

import { cs, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${cs.flexColumn()};
  width: 100%;
  margin-bottom: 30px;
`
export const Title = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  color: ${theme('thread.articleTitle')};
  font-size: 18px;
  font-weight: bold;
`
export const Desc = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
`
