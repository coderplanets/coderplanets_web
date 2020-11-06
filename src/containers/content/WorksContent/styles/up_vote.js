import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  margin-top: ${({ size }) => (size === 'small' ? '1px' : '4px')};
`
export const Icon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  width: ${({ size }) => (size === 'small' ? '12px' : '14px')};
  height: ${({ size }) => (size === 'small' ? '12px' : '14px')};
  display: block;
  margin-right: 8px;
  margin-bottom: ${({ size }) => (size === 'small' ? '1px' : '0')};
`
export const Num = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: ${({ size }) => (size === 'small' ? '13px' : '15px')};
`
