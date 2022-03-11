import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  flex-grow: 1;
  /* border: 1px solid tomato; */
  padding: 20px 30px;
  padding-top: 30px;
  background: ${theme('modal.subPanel')};
`
export const Title = styled.div`
  ${css.flexColumn()};
`
export const DetailDesc = styled.div`
  padding: 0 5px;
`
