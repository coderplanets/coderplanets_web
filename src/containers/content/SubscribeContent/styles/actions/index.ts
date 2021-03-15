import styled from 'styled-components'

import type { TTestable } from '@/spec'
import Img from '@/Img'
import { Button } from '@/components/Buttons'
import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flex('align-both')};
  padding-left: 5%;
  margin-top: 10%;
`
export const InnerWrapper = styled.div`
  ${css.flexColumn('align-start')};
`
export const SubscribeBtn = styled(Button)`
  height: 42px;
  width: 210px;
`
export const SubscribeIcon = styled(Img)`
  fill: ${theme('button.fg')};
  ${css.size(12)};
  margin-right: 8px;
`
export const Desc = styled.div`
  ${css.flex('justify-center')};
  width: 100%;
  margin-top: 20px;
  color: ${theme('thread.articleDigest')};
  letter-spacing: 1px;
`
