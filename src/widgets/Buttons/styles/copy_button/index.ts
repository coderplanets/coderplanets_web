import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import CopySVG from '@/icons/Copy'
import CheckSVG from '@/icons/Checked'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
`
export const CopyIcon = styled(CopySVG)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(16)};
  margin-right: 2px;
  opacity: 0.8;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`
export const CopyedHint = styled.div`
  ${css.flex('align-both')};
`
export const CopyedIcon = styled(CheckSVG)`
  fill: ${theme('baseColor.green')};
  ${css.size(16)};
  margin-right: 2px;
`
export const CopyedText = styled.div`
  font-size: 12px;
  color: ${theme('baseColor.green')};
`
