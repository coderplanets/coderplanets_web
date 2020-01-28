import styled from 'styled-components'

// import Img from '@Img'
import { theme, cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flex('align-start')}
  color: ${theme('thread.articleDigest')};
  width: 40%;
`
export const Text = styled.span`
  color: ${theme('thread.articleDigest')};
  opacity: 0.7;
  font-size: 12px;
`
export const TotalNum = styled.span`
  margin-top: -2px;
  margin-left: 4px;
  margin-right: 5px;
  color: ${theme('thread.articleTitle')};
`
export const Divider = styled.div`
  margin-left: 5px;
  margin-right: 2px;
  margin-top: -2px;
`
export const UnderlineBtn = styled.div`
  border-bottom: 1px dashed grey;
  margin-top: -2px;
  margin-left: 2px;
  margin-right: 2px;

  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`
