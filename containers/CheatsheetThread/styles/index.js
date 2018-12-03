import styled from 'styled-components'

// import Img from '../../../components/Img'
import { theme, cs } from '../../../utils'

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

  @media (max-width: 1450px) {
    width: 500px;
  }
  @media (max-width: 1250px) {
    width: 450px;
  }
  @media (max-width: 1100px) {
    width: 350px;
  }
`
