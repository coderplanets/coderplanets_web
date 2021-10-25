import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  color: ${theme('thread.articleDigest')};
`
export const PublishWrapper = styled.div`
  ${css.flex('align-center')};
  margin-left: 3px;
  margin-bottom: 8px;
  font-size: 13px;
`
export const Bottom = styled.div`
  ${css.flex('justify-between', 'align-center')};
`
