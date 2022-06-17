import styled from 'styled-components'

import type { TSpace } from '@/spec'
import css, { theme } from '@/utils/css'

import PlusSVG from '@/icons/Plus'

type TWrapper = {
  disabled: boolean
  dimWhenIdle: boolean
} & TSpace

export const Wrapper = styled.div<TWrapper>`
  position: relative;
  ${css.flex('align-center')};
  opacity: ${({ dimWhenIdle, disabled }) =>
    dimWhenIdle || disabled ? '0.65' : 1};

  margin-top: ${({ top }) => `${top}px` || 0};
  margin-bottom: ${({ bottom }) => `${bottom}px` || 0};
  margin-left: ${({ left }) => `${left}px` || 0};
  margin-right: ${({ right }) => `${right}px` || 0};

  &:hover {
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    opacity: ${({ disabled }) => (disabled ? 0.65 : 1)};
  }

  transition: all 0.2s;
`
export const PlusIcon = styled(PlusSVG)`
  ${css.size(12)};
  fill: ${theme('link')};
  margin-right: 3px;
`
export const Text = styled.div`
  font-size: 13px;
  color: ${theme('link')};
`
