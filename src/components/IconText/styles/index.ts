import styled from 'styled-components'

import type { TTestable } from '@/spec'
import Img from '@/Img'
import { css, theme } from '@/utils'

import { getIconSize, getTextSize, getMargin } from './metric'

type TIcon = {
  size: string
  margin: string
  round: string
}

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flex('align-center')};
`
export const Icon = styled(Img)<TIcon>`
  fill: ${theme('thread.articleDigest')};
  width: ${({ size }) => getIconSize(size)};
  height: ${({ size }) => getIconSize(size)};
  margin-right: ${({ size, margin }) => margin || getMargin(size)};
  display: block;
  border-radius: ${({ round }) => (round ? '100%' : '0')};
`
export const Text = styled.div<{ size: string }>`
  ${css.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  font-size: ${({ size }) => getTextSize(size)};
`
