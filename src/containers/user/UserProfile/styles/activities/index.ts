import styled from 'styled-components'

import { theme } from '@/utils/themes'

export const Wrapper = styled.div`
  padding: 0 10px;
  margin-top: 50px;
`
export const Title = styled.div`
  font-size: 14px;
  color: ${theme('thread.articleTitle')};
  flex-grow: 1;
  margin-top: -4px;
`
export const Divider = styled.div`
  width: 100%;
  padding: 0 5px;
  height: 1px;
  background: ${theme('thread.articleDigest')};
  opacity: 0.2;
  margin-top: 12px;
`
