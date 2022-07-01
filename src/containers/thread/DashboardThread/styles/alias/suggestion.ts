import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import Button from '@/widgets/Buttons/Button'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  margin-top: 10px;
`
export const Hint = styled.div`
  font-size: 12px;
  color: ${theme('lightText')};
  margin-left: 2px;
`
export const List = styled.div`
  ${css.flex('align-center')};
  margin-left: 12px;
`
export const Item = styled(Button)`
  ${css.flex('align-center')};
  height: 18px;
  opacity: 0.8;
  padding: 3px 6px;
  padding-bottom: 0;
  margin-right: 10px;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`
