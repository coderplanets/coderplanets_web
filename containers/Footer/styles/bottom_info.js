import styled from 'styled-components'

import { theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};
  justify-content: space-between;
  padding-left: 5%;
  padding-right: 5%;
  background: #d9e6e5;
  height: 40px;
  width: 100%;
`
export const Copyrights = styled.div`
  color: ${theme('thread.articleDigest')};
`
export const Thanks = styled.div`
  color: ${theme('thread.articleDigest')};
`
export const ThxTitle = styled.div``
