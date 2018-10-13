import styled from 'styled-components'

/* import { Img } from '../../../components' */
import Img from '../../Img'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  color: ${theme('banner.desc')};
  display: flex;
  justify-content: center;
  height: 200px;
  align-items: center;
  flex-direction: column;
`
export const Title = styled.div`
  margin-top: 10px;
  font-size: ${({ size }) => (size === 'default' ? '1rem' : '1.2rem;')};
`

export const Icon = styled(Img)`
  fill: ${theme('banner.desc')};
  width: ${({ size }) => (size === 'default' ? '70px' : '100px')};
  height: ${({ size }) => (size === 'default' ? '70px' : '100px')};
`
