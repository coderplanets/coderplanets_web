import styled from 'styled-components'

import type { TTestable, TSpace } from '@/spec'
import css, { theme } from '@/utils/css'

import InfoSVG from '@/icons/Info'

type TWrapper = { gradientDirection: 'left' | 'right' } & TTestable & TSpace
export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TWrapper>`
  ${css.flex('align-center')};
  width: ${({ gradientDirection }) =>
    gradientDirection === 'right' ? 'calc(100% + 10px)' : '100%'};
  height: 42px;
  background: ${({ gradientDirection }) =>
    `linear-gradient(to ${gradientDirection}, #f7f7f7 60%, transparent)`};
  padding: 0 10px;
  border-radius: 10px;

  margin-top: ${({ top }) => `${top}px` || 0};
  margin-bottom: ${({ bottom }) => `${bottom}px` || 0};
  margin-left: ${({ left }) => `${left}px` || 0};
  margin-right: ${({ right }) => `${right}px` || 0};
`
export const HintWrapper = styled.div`
  ${css.flex('align-center')};
`
export const InfoIcon = styled(InfoSVG)`
  fill: ${theme('thread.extraInfo')};
  ${css.size(14)};
  margin-right: 6px;
  opacity: 0.6;
`
export const HintText = styled.div`
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
`
export const Hint = styled.span`
  color: ${theme('thread.articleTitle')};
  margin-left: 2px;
`
export const ActionWrapper = styled.div`
  ${css.flex('align-center')};
`
