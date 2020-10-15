import styled from 'styled-components'
import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flexColumn('justify-center')};

  text-align: center;

  padding-top: 10px;
  padding-bottom: 10px;
  margin-right: 10px;
`
export const Title = styled.div`
  font-size: 0.8rem;
  color: ${theme('banner.desc')};
`
export const Number = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${theme('banner.desc')};
`
