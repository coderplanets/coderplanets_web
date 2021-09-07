import styled from 'styled-components'

import type { TTestable, TSpace } from '@/spec'

import Img from '@/Img'
import css from '@/utils/css'
import { theme } from '@/utils/themes'

type TWrapper = TSpace & TTestable
export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TWrapper>`
  ${css.flex('align-center')};
  margin-left: ${({ left }) => `${left}px` || 0};
  margin-right: ${({ right }) => `${right}px` || 0};
  margin-top: ${({ top }) => `${top || 0}px`};
  margin-bottom: ${({ bottom }) => `${bottom || 0}px`};
`
export const LinkIcon = styled(Img)`
  ${css.size(13)};
  fill: ${theme('thread.articleDigest')};
`
export const Source = styled.a`
  color: #119396;
  font-size: 13px;
  margin-left: 3px;
  text-decoration: none;

  &:hover {
    color: #119396;
    text-decoration: underline;
  }
`
