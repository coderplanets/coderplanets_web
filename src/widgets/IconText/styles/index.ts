import styled from 'styled-components'

import type { TTestable, TSIZE } from '@/spec'
import Img from '@/Img'
import css, { theme } from '@/utils/css'

import { getIconSize, getTextSize, getMargin } from './metric'

type TIcon = {
  size: TSIZE
  margin: string
  round: boolean
  highlight: boolean
}

type TWrapper = { dimWhenIdle: boolean } & TTestable
export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TWrapper>`
  ${css.flex('align-center')};
  opacity: ${({ dimWhenIdle }) => (dimWhenIdle ? 0.7 : 1)};

  &:hover {
    opacity: 1;
  }
`
export const Icon = styled(Img)<TIcon>`
  fill: ${({ highlight }) =>
    highlight ? theme('thread.articleTitle') : theme('thread.articleDigest')};
  width: ${({ size }) => getIconSize(size)};
  height: ${({ size }) => getIconSize(size)};
  margin-right: ${({ size, margin }) => margin || getMargin(size)};
  display: block;
  border-radius: ${({ round }) => (round ? '100%' : '0')};
`
type TText = {
  size: TSIZE
  highlight: boolean
}

export const Text = styled.div<TText>`
  ${css.flex('align-center')};
  color: ${({ highlight }) =>
    highlight ? theme('thread.articleTitle') : theme('thread.articleDigest')};
  font-size: ${({ size }) => getTextSize(size)};
`
