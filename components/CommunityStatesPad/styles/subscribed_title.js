import styled from 'styled-components'

// import Img from '@components/Img'
import { theme, cs } from '@utils'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`
export const PopoverInfo = styled.div`
  ${cs.flexColumn()};
  padding: 10px;
  padding-bottom: 5px;
  width: 200px;
`
export const PopTitle = styled.div`
  color: ${theme('thread.articleTitle')};
`
export const PopDesc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 0.8rem;
  margin-top: 4px;
`
