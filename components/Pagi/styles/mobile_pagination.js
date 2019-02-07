import styled from 'styled-components'

// import Img from '../../../components/Img'
import { theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flex('justify-between')};
  align-items: center;
  margin-left: 12px;
  margin-right: 0;
`
export const IndexPage = styled.div`
  color: ${theme('thread.articleTitle')};
`
export const SelectorWrapper = styled.div`
  ${cs.flex('align-center')};
`
export const CurPageNumber = styled.div`
  color: ${theme('thread.articleDigest')};
  margin-left: 4px;
  margin-right: 4px;
`
