import styled from 'styled-components'

// import Img from '@Img'
import { theme, cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-both')}
  width: 80%;
  margin-top: 4%;
  margin-bottom: 3%;
`
export const Sentence = styled.div`
  color: ${theme('haveADrinkPage.sentence')};
  font-size: 24px;
  font-size: ${({ fontSize }) => fontSize};
`
export const Hint = styled.p`
  color: ${theme('haveADrinkPage.hint')};
  margin-top: 10px;
  border-top: 1px solid;
  border-top-color: ${theme('haveADrinkPage.divider')};
  padding-top: 5px;
  padding-left: 10px;
  padding-right: 10px;
`
