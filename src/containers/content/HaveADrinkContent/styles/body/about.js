import styled from 'styled-components'

// import Img from '@/Img'
import { theme, cs } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-both')}
  color: ${theme('thread.articleDigest')};
  width: 100%;
  margin-top: -15%;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 20px;
`
export const Body = styled.div`
  margin-top: 20px;
  color: ${theme('thread.articleDigest')};
  font-size: 16px;
  margin-left: 10%;
  margin-right: 10%;
  line-height: 32px;
`
