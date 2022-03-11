import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css, { theme } from '@/utils/css'
import Img from '@/Img'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flex('align-both')}
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 18px;
  margin-left: 10px;
  margin-right: 10px;
`
export const PrefixIcon = styled(Img)<{ reverse?: boolean }>`
  fill: ${theme('thread.articleDigest')};
  ${css.size(15)};

  transform: ${({ reverse }) => (reverse ? 'rotateY(180deg)' : '')};
`
