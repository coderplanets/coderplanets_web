import styled from 'styled-components'

import Img from '@/Img'
import { theme, css, animate } from '@/utils'

import { Wrapper as ParentWrapper } from './index'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${css.flex('align-center')};
`
export const MailIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(14)};
  display: block;
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
  display: block;
  transform: rotateZ(386deg);
`
export const MailBoxIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(20)};
  display: block;
`
