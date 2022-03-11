import styled from 'styled-components'

// import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  width: 100%;
`
export const SentenceWrapper = styled.div`
  ${css.flexColumn('align-both')}
  margin-top: 4%;
  margin-bottom: 3%;
  padding-left: 8%;
  padding-right: 8%;
  text-align: left;
`
export const Sentence = styled.div<{ fontSize: string }>`
  text-align: center;
  width: 100%;
  color: ${theme('haveADrinkPage.sentence')};
  font-size: 24px;
  font-size: ${({ fontSize }) => fontSize};
`
export const Hint = styled.p`
  color: ${theme('haveADrinkPage.hint')};
  margin-top: 20px;
  border-top: 1px solid;
  border-top-color: ${theme('haveADrinkPage.divider')};
  padding-top: 6px;
  padding-left: 10px;
  padding-right: 10px;
`
