import styled from 'styled-components'

// import Img from '@components/Img'
import { theme, cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flex('align-end')}
  color: ${theme('thread.articleDigest')};
  width: 40%;
`
export const Text = styled.span`
  color: ${theme('thread.articleDigest')};
  opacity: 0.7;
  font-size: 12px;
`
export const TotalNum = styled.span`
  margin-left: 4px;
  margin-right: 3px;
  color: ${theme('thread.articleTitle')};
`
export const TagText = styled.span`
  font-size: 13px;
`
