import styled from 'styled-components'

import { theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  margin-top: 50px;
  padding: 0 10px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  width: 100%;
  margin-bottom: 10px;
  font-size: 14px;
`
export const Divider = styled.div`
  width: 100%;
  padding: 0 5px;
  height: 1px;
  background: ${theme('thread.articleDigest')};
  opacity: 0.2;
  margin-top: 12px;
  margin-bottom: 16px;
`
