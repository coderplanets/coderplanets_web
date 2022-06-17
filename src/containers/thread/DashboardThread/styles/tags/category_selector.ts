import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-start')};
  margin-bottom: 30px;
  margin-top: 1px;
`
export const Hint = styled.div`
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
  opacity: 0.8;
  margin-top: 3px;
  width: 70px;
  min-width: 70px;
`
export const CatsWrapper = styled.div`
  ${css.flex('align-center')};
  flex-wrap: wrap;
  margin-left: 15px;
  gap: 14px;
`
