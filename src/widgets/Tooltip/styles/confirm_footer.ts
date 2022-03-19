import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-both')};
  margin-top: 10px;
  border-top: 1px solid;
  border-top-color: ${theme('popover.borderColor')};
`
export const ButtonsWrapper = styled.div`
  padding-top: 8px;
  ${css.flex('align-both')};
`
export const RedButton = styled.div`
  color: ${theme('baseColor.red')};
  font-size: 13px;
  filter: saturate(0.8);

  &:hover {
    cursor: pointer;
    filter: saturate(1);
  }
`
export const CancelButton = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 13px;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`
