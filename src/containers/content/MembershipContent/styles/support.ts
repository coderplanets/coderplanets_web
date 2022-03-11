import styled from 'styled-components'

import type { TActive } from '@/spec'
import Img from '@/Img'
import css, { theme } from '@/utils/css'

import CheckedSVG from '@/icons/Checked'

import { Dashboard } from './index'

export const PkgItem = styled.div<TActive>`
  ${css.flex('align-center')};
  margin-bottom: 7px;

  opacity: ${({ active }) => (active ? 1 : 0.8)};

  ${Dashboard}:hover & {
    opacity: 1;
  }

  transition: opacity 0.2s;
`
export const PkgItemTitle = styled.div<{ not: boolean }>`
  color: ${({ not }) =>
    !not ? theme('thread.articleTitle') : theme('thread.articleDigest')};
  font-size: 14px;
`
export const PkgItemYesIcon = styled(CheckedSVG)`
  fill: ${theme('baseColor.green')};
  ${css.size(15)};
  margin-right: 6px;
`
export const ArrowIcon = styled(Img)`
  ${css.size(15)};
  fill: ${theme('baseColor.green')};
  margin-left: -1px;
  margin-right: 7px;
`
