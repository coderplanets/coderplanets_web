import styled from 'styled-components'

// import Img from '@/Img'
import css from '@/utils/css'

import Button from '../../Button'
// see example: https://codepen.io/mydearxym2/pen/qBEvvpo

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  width: 100%;
`
export const PubButton = styled(Button)`
  ${css.flex('justify-between')};
  width: 100%;

  border: none;
  font-weight: 600;
  background: #3b434a; // to-theme
  color: white; // to-theme
  height: 33px;
  border-radius: 15px;
`
export const MoreOption = styled.div`
  ${css.flex('align-both')};
  margin-left: 3px;
`
