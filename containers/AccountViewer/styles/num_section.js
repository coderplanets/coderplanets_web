import styled from 'styled-components'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
