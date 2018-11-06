import styled from 'styled-components'

// import { Img } from '../../../components'
import { theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};
  margin-top: 2px;
  margin-bottom: 2px;
`
export const Salary = styled.div`
  color: ${theme('contrastFg')};
  font-size: 1rem;
`
export const Text = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 1rem;
`
