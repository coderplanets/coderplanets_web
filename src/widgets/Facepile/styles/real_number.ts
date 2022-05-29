import styled from 'styled-components'

import { theme } from '@/utils/css'
import { pixelAdd } from '@/utils/dom'

import { AvatarsMore } from './index'
import { getAvatarSize, getMoreTextWidth } from './metric'

type TWrapper = { size: string; total: number }
export const Wrapper = styled(AvatarsMore)<TWrapper>`
  background-color: ${theme('textBadge')};
  color: ${theme('thread.articleTitle')};
  height: ${({ size }) => pixelAdd(getAvatarSize(size) as string, -2)};
  min-height: ${({ size }) => pixelAdd(getAvatarSize(size) as string, -2)};
  width: ${({ total }) => getMoreTextWidth(total)};
  min-width: ${({ total }) => getMoreTextWidth(total)};
  font-weight: 400;
  padding-left: 1px;
  margin-left: 4px;
  border-radius: 100%;
  font-size: 13px;
`
export const HighlightNumber = styled.div`
  font-weight: 500;
  background: ${theme('heightGradient')};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
