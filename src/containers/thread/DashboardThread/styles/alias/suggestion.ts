import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import Button from '@/widgets/Buttons/Button'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  margin-top: 10px;
`
export const Hint = styled.div`
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
`
export const List = styled.div`
  ${css.flex('align-center')};
  margin-left: 12px;
`
export const Item = styled(Button)`
  opacity: 0.8;
  padding-left: 6px;
  padding-right: 6px;
  margin-right: 10px;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`
