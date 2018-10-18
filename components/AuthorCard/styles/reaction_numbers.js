import styled from 'styled-components'

// import { Img } from '../../../components'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  margin-top: 15px;
`
export const ReactionNum = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
