import styled from 'styled-components'

import Img from '@/Img'
import { theme } from '@/utils/css'

export const Wrapper = styled.div`
  position: relative;
  border: 1px solid;
  border-color: #c2c2c2;
  border-radius: 4px;
  width: 40px;
  height: 50px;
  margin-right: 12px;
  padding: 3px;
`
export const CoverImg = styled(Img)`
  width: 100%;
  height: 50%;
  object-fit: cover;
  border-radius: 3px;
`
const BaseBar = styled.div`
  position: absolute;
  height: 2px;
  background: ${theme('thread.extraInfo')};
  opacity: 0.4;
  border-radius: 2px;
`
export const DescBar = styled(BaseBar)`
  width: 33%;
  bottom: 4px;
  left: 3px;
`
export const DescBar2 = styled(BaseBar)`
  width: 80%;
  bottom: 8px;
  left: 3px;
`
export const DescBar3 = styled(BaseBar)`
  width: 60%;
  bottom: 12px;
  left: 3px;
`
