import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  padding: 3px 5px;
  padding-left: 10px;
`
export const UsersWrapper = styled.div`
  ${css.flex('align-center')};
  font-size: 13px;
`
export const Username = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 13px;
  margin-right: 5px;
`
export const Units = styled.div`
  color: ${theme('thread.articleDigest')};
  margin-left: 3px;
  margin-right: 3px;
  font-size: 13px;
`
