import styled from 'styled-components'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  width: 100%;
  height: 60px;
`
export const AuthorWrapper = styled.div`
  ${css.flex('align-center')};
`
export const Avatar = styled(Img)`
  ${css.circle(18)};
`
export const AuthorName = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 15px;
  margin-left: 10px;
`
export const PublishWrapper = styled.div`
  ${css.flex('align-center')}
`
export const PubDate = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 13px;
`
export const EditedHint = styled.div`
  font-size: 13px;
  color: ${theme('thread.articleDigest')};

  &:before {
    content: '(';
  }
  &:after {
    content: ')';
  }
`
