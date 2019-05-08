import styled from 'styled-components'

// import Img from '@components/Img'
import { theme, cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
  width: 100%;
  padding: 20px;
`
export const CardWrapper = styled.div`
  width: 550px;
  height: auto;
  background: ${theme('code.bg')};
  margin: 10px;
  margin-right: 20px;
  overflow-y: scroll;

  ${cs.media.mobile`
    width: 95%;
  `};
`

export const EmptyOffset = styled.div`
  margin-left: -5%;
`
