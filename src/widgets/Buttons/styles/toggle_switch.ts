import styled from 'styled-components'

import type { TSizeSM } from '@/spec'
import { SIZE } from '@/constant'

import HookSVG from '@/icons/Hook'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div<{ size: TSizeSM }>`
  ${css.flex('align-center')};
  width: 42px;

  transform: ${({ size }) => (size === SIZE.SMALL ? 'scale(0.7)' : 'scale(1)')};
`
export const Track = styled.span<{ checked: boolean }>`
  background: ${theme('hoverBg')};
  background: ${({ checked }) =>
    checked ? theme('thread.articleTitle') : theme('border')};
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  height: 26px;
  width: 100%;
  position: relative;
`
export const Indicator = styled.span<{ checked: boolean }>`
  ${css.circle(20)};
  ${css.flex('align-both')};
  /* background: ${theme('thread.articleTitle')}; */
  background: white;
  /* opacity: ${({ checked }) => (checked ? 1 : 0.4)}; */
  position: absolute;
  left: 3px;
  bottom: 3px;
  transform: ${({ checked }) =>
    checked ? 'translateX(16px)' : 'translateX(0)'};
  transition: 0.2s;
`
export const CheckIcon = styled(HookSVG)<{ checked: boolean }>`
  fill: ${theme('thread.articleTitle')};
  ${css.size(12)};
  opacity: 0;
  opacity: ${({ checked }) => (checked ? 1 : 0)};

  transition: opacity 0.2s ease-in-out;
`
