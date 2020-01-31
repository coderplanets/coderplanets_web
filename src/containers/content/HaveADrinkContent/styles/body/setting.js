import styled from 'styled-components'

// import Img from '@Img'
import { theme, cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-both')}
  color: ${theme('thread.articleDigest')};
  width: 100%;
`
export const Sentence = styled.div`
  color: ${theme('haveADrinkPage.sentence')};
  font-size: 24px;
`
