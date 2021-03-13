import styled from 'styled-components'

import { TActive } from '@/spec'
import Img from '@/Img'
import { theme, css } from '@/utils'

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
const PkgItemIcon = styled(Img)`
  margin-right: 6px;
`
export const PkgItemYesIcon = styled(PkgItemIcon)`
  fill: ${theme('baseColor.green')};
  ${css.size(12)};
  margin-right: 8px;
`
export const ArrowIcon = styled(PkgItemIcon)`
  ${css.size(15)};
  fill: ${theme('baseColor.green')};
  margin-left: -2px;
`
export const PkgItemNoIcon = styled(PkgItemIcon)`
  fill: ${theme('baseColor.red')};
  width: 12px;
  height: 10px;
  margin-right: 6px;
  opacity: 0.6;
`
