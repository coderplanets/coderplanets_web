import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-end', 'justify-between')};
  color: ${theme('thread.articleDigest')};
  margin-left: 0;
  margin-bottom: 3px;
`
export const AuthorInfo = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.extraInfo')};
  font-size: 12px;
`
export const TimeStamp = styled.div`
  font-size: 12px;
  margin-top: 2px;
`
export const Brief = styled.div`
  ${css.flexGrow('align-center')};
  margin-bottom: 10px;
  color: ${theme('thread.articleTitle')};
  &:hover {
    cursor: pointer;
  }
`
export const TagListWrapper = styled.div`
  margin-right: -3px;
`
