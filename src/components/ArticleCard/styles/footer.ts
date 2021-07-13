import styled from 'styled-components'

import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  color: ${theme('thread.articleDigest')};
`
export const PublishWrapper = styled.div`
  ${css.flex('align-center')};
  margin-left: 3px;
  margin-bottom: 3px;
  font-size: 13px;
`
export const Bottom = styled.div`
  ${css.flex('justify-between', 'align-center')};
`
