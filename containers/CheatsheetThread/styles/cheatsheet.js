import styled from 'styled-components'

// import { Img } from '../../../components'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
// width: 550px;
export const CardWrapper = styled.div`
  width: 550px;
  height: auto;
  background: ${theme('code.bg')};
  margin: 10px;
  margin-right: 20px;
  overflow-y: scroll;

  @media (max-width: 1600px) {
    width: 350px;
  }
  @media (max-width: 1450px) {
    width: 500px;
  }
  @media (max-width: 1300px) {
    width: 450px;
  }
`
