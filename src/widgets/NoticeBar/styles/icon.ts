import styled from 'styled-components'

// import type { TTestable } from '@/spec'
import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

const Icon = styled(Img)`
  fill: #a57a32; // ${theme('thread.articleTitle')};
  ${css.size(15)};
  margin-right: 12px;
  margin-top: 5px;
`
export const LockIcon = styled(Icon)`
  fill: #a57a32; // ${theme('thread.articleTitle')};
`
export const NoticeIcon = styled(Icon)`
  fill: #a57a32; // ${theme('thread.articleTitle')};
`
export const InfoIcon = styled(Icon)`
  fill: ${theme('button.primary')};
`
