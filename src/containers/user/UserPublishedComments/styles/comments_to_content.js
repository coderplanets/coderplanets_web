import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flexColumn()};
`
export const CommentBlock = styled.div`
  ${css.flexColumn()};
  padding: 10px;
  padding-bottom: 0;
  &:hover {
    background-color: #113744;
  }
`
export const CommentDivider = styled.div`
  border-bottom: 1px solid;
  border-color: ${theme('thread.articleSpliter')};
`
export const CommentBox = styled.div``
export const CommentHeader = styled.div`
  ${css.flex('align-center')};
  margin-top: 3px;
  margin-bottom: 3px;
`
export const Avatar = styled(Img)`
  ${css.circle('30px')};
  margin-right: 8px;
`
export const AvatarInfo = styled.div`
  ${css.flexColumn()};
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
