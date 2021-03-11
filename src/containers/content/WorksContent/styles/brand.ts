import styled from 'styled-components'

import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testid,
}))`
  ${css.flexColumn()};
  width: 100%;
  margin-bottom: 28px;
  margin-top: 8px;
`
export const Title = styled.div.attrs((props) => ({
  'data-test-id': props.testid,
}))`
  color: ${theme('thread.articleTitle')};
  font-size: 18px;
  font-weight: bold;
`
export const Desc = styled.div.attrs((props) => ({
  'data-test-id': props.testid,
}))`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
`
