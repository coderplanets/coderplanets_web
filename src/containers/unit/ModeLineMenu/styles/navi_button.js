import styled from 'styled-components'

import Img from '@/Img'
import { cs, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${cs.flexColumn('align-both')};
  width: 68px;
  /* height: 74px; */
`
export const Icon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  ${cs.circle('32px')};
  display: block;
  padding: 8px;
  background: #023544;
`
export const Text = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 12px;
  margin-top: 4px;
`
