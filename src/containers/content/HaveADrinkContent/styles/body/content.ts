import styled from 'styled-components'

import Img from '@/Img'
// import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn('align-both')};
`
export const Title = styled.div`
  margin-bottom: 25px;
  margin-top: -10px;
  font-weight: bold;
`
export const Desc = styled.div`
  font-size: 18px;
  opacity: 0.8;
  padding: 0 10%;
  margin-bottom: 10px;
`

export const TextWrapper = styled.div``

export const ImageContentWrapper = styled(Wrapper)`
  ${css.flexColumn('align-both')}
  margin-top: -30px;
`
export const Image = styled(Img)`
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`
export const Text = styled.div`
  margin-top: 25px;
`
