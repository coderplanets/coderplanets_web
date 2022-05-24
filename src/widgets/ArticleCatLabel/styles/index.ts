import styled from 'styled-components'

import type { TTestable } from '@/spec'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>``

export const Label = styled.div`
  ${css.flex('align-center')};
`
export const Icon = styled(Img)`
  ${css.size(14)};
  fill: ${theme('thread.articleDigest')};
`
export const Text = styled.div`
  font-size: 12px;
  color: ${theme('thread.articleDigest')};
  margin-right: 5px;
`
