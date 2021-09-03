import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  width: 100%;
  color: ${theme('thread.articleTitle')};
  border-radius: 4px;
`
export const TabWrapper = styled.div`
  ${css.flex('align-center')};
  padding-left: 20px;
  padding-right: 10px;
`
export const FilterWrapper = styled.div`
  ${css.flex('justify-end')};
  width: 100px;
  margin-top: -4px;

  &:hover {
    cursor: pointer;
  }
`
