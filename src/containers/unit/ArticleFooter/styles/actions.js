import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${css.flex('align-center')};
`
export const Item = styled.div`
  ${css.flex('align-center')};
  cursor: pointer;
`
const Icon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 15px;
  height: 15px;
  margin-top: -1px;
  display: block;
`
export const ReferIcon = styled(Icon)``
export const RecordIcon = styled(Icon)``

export const ReferNum = styled.span`
  color: #00a59b;
  margin-right: 3px;
`
export const Text = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
  margin-left: 7px;

  ${Item}:hover & {
    color: ${theme('thread.articleTitle')};
  }

  transition: color 0.25s;
`
