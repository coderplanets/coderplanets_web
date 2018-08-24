import styled from 'styled-components'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  margin-bottom: 20px;
`

export const Title = styled.div`
  color: ${theme('banner.title')};
  font-size: 1.1rem;
  margin-bottom: 10px;
`

export const Desc = styled.div`
  color: ${theme('banner.desc')};
  display: flex;
  align-items: baseline;
`

export const Number = styled.div`
  color: ${theme('banner.title')};
  font-size: 1.1rem;
  margin-left: 5px;
  margin-right: 5px;
`
