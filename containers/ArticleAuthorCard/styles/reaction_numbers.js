import styled from 'styled-components'

// import { Img } from '../../../components'
import { theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flex('justify-between')};
  padding: 0 10px;
  margin-top: 15px;
`
export const ReactionNum = styled.div`
  ${cs.flexColumn('justify-center')};
  text-align: center;
`
export const NumDesc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 0.8rem;
`
export const Number = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 1rem;
`
