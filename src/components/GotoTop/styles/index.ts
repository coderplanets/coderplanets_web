import styled from 'styled-components'

import type { TTestable } from '@/spec'
import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.size(30)};
  ${css.flex('align-both')};
`
export const Icon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(20)};
  &:hover {
    fill: #25807d;
    cursor: pointer;
  }
`
export const Hint = styled.div`
  color: ${theme('thread.articleDigest')};
  text-align: center;
  width: 80px;
  padding: 5px;
`
