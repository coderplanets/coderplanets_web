import styled from 'styled-components'

// import { Img } from '../../../components'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 1rem;
  margin-bottom: 15px;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 0.9rem;
`
