import styled from 'styled-components'

import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  cursor: pointer;
  margin-right: 14px;
  margin-right: 5px;
  padding: 0 5px;
  border-radius: 5px;
  margin-left: -5px;

  &:hover {
    background: #023c4a;
  }
`

export const Count = styled.div`
  opacity: 0.8;

  ${Wrapper}:hover & {
    color: #00a59b;
  }
`
