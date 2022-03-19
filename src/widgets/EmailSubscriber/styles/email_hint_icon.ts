import styled from 'styled-components'

import type { TTestable } from '@/spec'
import Img from '@/Img'
import css, { theme, animate } from '@/utils/css'

import { Wrapper as ParentWrapper } from './index'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flex('align-center')};
`
export const MailIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(14)};
  transform: rotate(10deg);
  margin-right: 12px;

  ${ParentWrapper}:hover & {
    animation: ${animate.shake} 10s linear;
  }
`
export const CurveLineIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(24)};
  margin-right: 10px;
  transform: rotateZ(386deg);
`
export const MailBoxIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(20)};
`
