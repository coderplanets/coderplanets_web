import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center', 'justify-center')};
  height: 100%;
  color: ${theme('thread.articleTitle')};
`
export const QRCodeWrapper = styled.div`
  width: 160px;
`
export const DescWrapper = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 13px;
`
export const DescTitle = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 15px;
  margin-bottom: 10px;
`
