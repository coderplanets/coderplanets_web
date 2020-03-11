import styled from 'styled-components'

// import Img from '@Img'
import { theme, cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexGrow('align-both')}
  color: ${theme('thread.articleDigest')};
  opacity: 0;
  width: 40%;
`
export const Text = styled.span`
  color: ${theme('thread.articleDigest')};
  opacity: 0.7;
  font-size: 12px;
`
export const CurNum = styled.span`
  margin-right: 4px;
  margin-left: 2px;
`
export const TotalNum = styled.span`
  margin-left: 4px;
  margin-right: 3px;
  color: ${theme('thread.articleTitle')};
`
export const TagText = styled.span`
  color: ${theme('thread.articleTitle')};
  font-size: 13px;
  margin-left: 2px;
  font-weight: bold;
`
