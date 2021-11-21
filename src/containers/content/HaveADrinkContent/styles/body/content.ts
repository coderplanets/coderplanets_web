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

export const NumberContentWrapper = styled.div`
  ${css.flexColumn('align-both')}
  margin-top: -50px;
`
export const NumberWrapper = styled.div`
  position: relative;
  margin-bottom: 15px;
  color: #139c9e;
`
export const Number = styled.div`
  font-size: 45px;
  font-weight: bold;
`
export const Unit = styled.div`
  position: absolute;
  font-size: 16px;
  font-weight: bold;
  opacity: 0.6;
  bottom: 14px;
  right: -22px;
`
export const ImageContentWrapper = styled(Wrapper)`
  ${css.flexColumn('align-both')}
  margin-top: -30px;
`
export const Image = styled(Img)<{ size: string }>`
  height: ${({ size }) => (size === 'small' ? '60px' : '200px')};
  object-fit: cover;
  border-radius: 8px;
`
export const Text = styled.div`
  margin-top: 25px;
`
