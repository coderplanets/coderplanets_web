import styled from 'styled-components'

import type { TTestable, TSpace } from '@/spec'
import css, { theme } from '@/utils/css'

import InfoSVG from '@/icons/Info'

type TWrapper = TTestable & TSpace
export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TWrapper>`
  ${css.flex('align-center')};
  width: 100%;
  height: 42px;
  background-color: #f7f7f7; // to-theme
  padding: 10px 16px;
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
  fill: ${theme('thread.articleDigest')};
  ${css.size(14)};
  margin-right: 5px;
  opacity: 0.5;
`
export const HintText = styled.div`
  font-size: 13px;
  color: ${theme('thread.articleTitle')};
`
export const ActionWrapper = styled.div`
  ${css.flex('align-center')};
`
