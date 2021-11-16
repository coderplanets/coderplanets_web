import styled from 'styled-components'

// import Img from '@/Img'
import css from '@/utils/css'

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 30px;
`
export const InnerWrapper = styled.div`
  position: relative;
  ${css.flex('align-center', 'justify-between')};
  width: 100%;
`
