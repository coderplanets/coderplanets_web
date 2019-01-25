import styled from 'styled-components'

import { theme, cs } from 'utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};
  justify-content: center;
  color: ${theme('thread.articleTitle')};
  font-size: 0.9rem;
`
export const LoginLabel = styled.div`
  font-size: 0.9rem;
  transition: color 0.3s;
  color: ${theme('banner.title')};
  margin-left: 3px;
  margin-right: 3px;

  &:hover {
    cursor: pointer;
    color: ${theme('thread.title')};
    text-decoration: underline;
  }
`
