import styled from 'styled-components'

// import { Img } from '../../../components'
import { theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
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
export const ErrorWrapper = styled.div`
  ${cs.flexColumn()};
  padding: 20px 40px;
  border: 1px solid;
  border-radius: 5px;
  border-top: 3px solid;
  border-color: ${theme('baseColor.error')};
  min-height: 100px;
  margin-bottom: 30px;
  background: ${theme('baseColor.errorBg')};
`
export const ErrorTitle = styled.div`
  font-size: 1.2rem;
  color: ${theme('baseColor.error')};
  margin-bottom: 20px;
`
export const ErrorLink = styled.a`
  transition: color 0.3s;
  color: ${theme('baseColor.error')};
  font-size: 1rem;

  &:hover {
    cursor: pointer;
    color: ${theme('baseColor.error')};
    text-decoration: underline;
  }
`
