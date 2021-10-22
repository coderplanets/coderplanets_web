import styled from 'styled-components'

import type { TTestable } from '@/spec'
// import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flex('align-center')};
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  flex-grow: 1;
  font-size: 14px;
`
export const OptionWrapper = styled.div`
  opacity: 0.6;

  ${Wrapper}:hover & {
    opacity: 1;
  }
  transition: opacity 0.25s;
`
