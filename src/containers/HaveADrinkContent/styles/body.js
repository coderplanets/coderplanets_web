import styled from 'styled-components'

// import Img from '@components/Img'
import { theme, cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-both')}
  width: 100%;
  margin-top: -15px;
`
export const Title = styled.h2`
  color: ${theme('thread.articleTitle')};
`
export const Desc = styled.p`
  color: ${theme('thread.articleDigest')};
  margin-top: 10px;
  border-top: 1px solid;
  border-top-color: #dbe6e6;
  padding-top: 5px;
  padding-left: 10px;
  padding-right: 10px;
`
