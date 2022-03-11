import styled from 'styled-components'

import Img from '@/Img'
import Button from '@/widgets/Buttons/Button'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
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
