import styled from 'styled-components'

import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  align-items; flex-end;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 1rem;
  flex-grow: 1;
`
export const FollowWrapper = styled.div`
  margin-top: -2px;
`
