import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  height: 100%;
`

export const MobileDigest = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 13px;
  position: relative;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
`
