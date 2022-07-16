import styled from 'styled-components'

import type { TSizeTS, TSpace } from '@/spec'
import { SIZE } from '@/constant'
import css, { theme } from '@/utils/css'

import Button from '@/widgets/Buttons/Button'
import ArrowSVG from '@/icons/ArrowSimple'

type TWrapper = { withBorder: boolean; size: TSizeTS } & TSpace

export const Wrapper = styled.div<TWrapper>`
  ${css.flex('align-center')};
  color: ${theme('thread.articleDigest')};

  border: ${({ withBorder }) => (withBorder ? '1px solid' : 'none')};
  border-color: ${({ withBorder }) =>
    withBorder ? theme('lightText') : theme('transparent')};

  border-radius: 10px;

  transform: ${({ size }) => (size === SIZE.TINY ? 'scale(0.85)' : 'none')};

  margin-top: ${({ top }) => `${top}px`};
  margin-bottom: ${({ bottom }) => `${bottom}px`};
  margin-left: ${({ left }) => `${left}px`};
  margin-right: ${({ right }) => `${right}px`};
`
export const Label = styled.div`
  opacity: 0.7;
`
export const InnerBtnWrapper = styled.div`
  ${css.flex('align-center')};
  margin-left: 2px;
  color: ${theme('thread.articleDigest')};
  font-weight: 400;
  font-size: 13px;

  &:hover {
    cursor: pointer;
    color: ${theme('thread.articleTitle')};
  }

  transition: color 0.2s;
`
export const ButtonWrapper = styled(Button)`
  border: none;
`
export const FilterIcon = styled(ArrowSVG)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(14)};
  transform: rotate(-90deg);
  margin-left: 5px;

  ${InnerBtnWrapper}:hover & {
    fill: ${theme('thread.articleDigest')};
  }
`
