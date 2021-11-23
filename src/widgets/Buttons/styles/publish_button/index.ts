import styled from 'styled-components'

// import Img from '@/Img'
import css from '@/utils/css'

import Button from '../../Button'

// see example: https://codepen.io/mydearxym2/pen/qBEvvpo

export const Wrapper = styled.div`
  width: 100%;
`
export const PubButton = styled(Button)`
  ${css.flex('justify-between')};
  width: 100%;
`
