import styled from 'styled-components'

import type { TTestable } from '@/spec'
import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flex('align-center')};
  width: auto;
  margin-top: 14px;
  margin-left: 8px;
`
export const Title = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  margin-right: 6px;
  opacity: 0.8;

  ${Wrapper}:hover & {
    color: ${theme('thread.articleTitle')};
    opacity: 1;
    cursor: pointer;
  }

  transition: color 0.2s;
`
export const Icon = styled(Img)`
  ${css.size(14)};
  opacity: 0.8;
  fill: ${theme('thread.articleDigest')};

  ${Wrapper}:hover & {
    fill: ${theme('thread.articleTitle')};
    opacity: 1;
    cursor: pointer;
  }

  transform: rotate(-90deg);
  transition: fill 0.2s;
`
