import styled from 'styled-components'

/* import { Img } from '../../../components' */
import Img from '../../../components/Img'
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
`

export const Icon = styled(Img)`
  fill: ${theme('banner.desc')};
  width: 70px;
  height: 70px;
`
