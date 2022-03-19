import styled from 'styled-components'

import type { TTestable, TSpace } from '@/spec'

import EnterSVG from '@/icons/Enter'
import css, { theme } from '@/utils/css'

type TWrapper = TSpace & TTestable

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TWrapper>`
  ${css.flex('align-center')};
  position: absolute;
  left: ${({ left }) => `${left}px`};
  right: ${({ right }) => `${right}px`};
  top: ${({ top }) => `${top}px`};
  bottom: ${({ bottom }) => `${bottom}px`};
  opacity: 0.6;
`
export const EnterIcon = styled(EnterSVG)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(12)};
  margin-right: 5px;
  transform: rotateY(180deg);
`
export const Text = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
`
