import styled from 'styled-components'

import type { TSizeSML } from '@/spec'

import { SIZE } from '@/constant'
import css, { theme } from '@/utils/css'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flexColumn('align-both')};
  color: ${theme('thread.articleDigest')};
  margin-left: -3%;
  height: 300px;
`
export const Title = styled.div<{ size: TSizeSML }>`
  margin-top: 10px;
  font-size: ${({ size }) => (size === SIZE.LARGE ? '18px' : '16px')};
`
export const Icon = styled(Img)<{ size: TSizeSML }>`
  fill: ${theme('thread.articleDigest')};
  ${({ size }) => (size === SIZE.LARGE ? css.size(100) : css.size(70))}
`
