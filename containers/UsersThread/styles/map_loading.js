import styled from 'styled-components'

import Img from '../../../components/Img'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 400px;
  align-items: center;
  flex-direction: column;
  padding-right: 50px;
`
export const LoadingIcon = styled(Img)`
  fill: ${theme('banner.desc')};
  width: 130px;
  height: 100px;
  display: block;
`
export const Title = styled.div`
  color: ${theme('banner.desc')};
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 10px;
`
export const Desc = styled.div`
  color: ${theme('banner.desc')};
  font-size: 1rem;
`
