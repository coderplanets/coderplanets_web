import styled from 'styled-components'

import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  height: 100%;
`
export const Header = styled.div`
  ${css.flex('align-center', 'justify-between')};
  margin-bottom: 15px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 14px;
`
export const CodeWrapper = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
`
