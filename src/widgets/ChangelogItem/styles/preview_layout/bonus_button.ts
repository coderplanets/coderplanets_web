import styled from 'styled-components'

import type { TSpace } from '@/spec'

import css from '@/utils/css'
import GiftSVG from '@/icons/Gift'

type TWrapper = TSpace

export const Wrapper = styled.div<TWrapper>`
  ${css.flex('align-center')};

  margin-top: ${({ top }) => `${top}px` || 0};
  margin-bottom: ${({ bottom }) => `${bottom}px` || 0};

  margin-left: ${({ left }) => `${left}px` || 0};
  margin-right: ${({ right }) => `${right}px` || 0};
`
export const Icon = styled(GiftSVG)`
  ${css.size(12)};
  fill: orange;
  margin-top: 1px;
`
export const Text = styled.div`
  font-size: 13px;
  opacity: 0.8;
  color: orange;
  font-weight: 600;
  margin-top: 2px;
  margin-left: 3px;
  margin-right: 1px;
`
