import styled from 'styled-components'

import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('align-both')};
  margin-top: 10px;
  margin-bottom: 5px;
  border-top: 1px solid;
  border-top-color: ${theme('popover.borderColor')};
`
export const ButtonsWrapper = styled.div`
  ${css.flex('align-both')};
  padding-top: 15px;
`
export const CancelButton = styled.div`
  color: ${theme('button.primary')};

  &:hover {
    color: ${theme('button.hoverBg')};
    cursor: pointer;
  }
`
