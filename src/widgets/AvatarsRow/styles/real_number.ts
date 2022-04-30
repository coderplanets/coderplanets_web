import styled from 'styled-components'

import { theme } from '@/utils/css'

import { AvatarsMore } from './index'
import { getAvatarSize, getMoreTextWidth } from './metric'

type TWrapper = { size: string; total: number }
export const Wrapper = styled(AvatarsMore)<TWrapper>`
  background-color: ${theme('textBadge')};
  color: ${theme('thread.articleTitle')};
  height: ${({ size }) => getAvatarSize(size)};
  width: ${({ total }) => getMoreTextWidth(total)};
  font-weight: 400;
  padding-left: 2px;
  margin-left: 4px;
  border-radius: 0 10px 10px 0;
`
export const HighlightNumber = styled.div`
  font-weight: 600;
  background: ${theme('heightGradient')};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
