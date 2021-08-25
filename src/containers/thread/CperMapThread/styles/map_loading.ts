import styled from 'styled-components'

import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn('align-center')};
  min-height: 400px;
  padding-top: 80px;
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
