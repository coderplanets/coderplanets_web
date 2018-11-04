import styled from 'styled-components'

import Img from '../../../components/Img'
import { theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const CommentBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  padding-bottom: 0;
  &:hover {
    background-color: ${theme('thread.articleHover')};
  }
`
export const CommentDivider = styled.div`
  border-bottom: 1px solid;
  border-color: ${theme('thread.articleSpliter')};
`
export const CommentBox = styled.div``
export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3px;
  margin-bottom: 3px;
`
export const Avatar = styled(Img)`
  ${cs.circle('30px')};
  margin-right: 8px;
`
export const AvatarInfo = styled.div`
  display: flex;
  flex-direction: column;
`
export const Nickname = styled.div`
  font-size: 0.9rem;
  color: ${theme('thread.articleDigest')};
`
export const When = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 0.8rem;
`
export const CommentBody = styled.div`
  margin-top: 3px;
  font-size: 0.9rem;
  margin-top: 5px;
`
