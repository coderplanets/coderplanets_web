import styled from 'styled-components'

import type { TMetric } from '@/spec'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  width: 100%;
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  margin-top: 50px;
  border-top: 1px solid #104352;
  padding-top: 20px;
  padding-right: 20%;
`
export const InnerWrapper = styled.div<{ metric: TMetric }>`
  ${css.flex()};
  margin-top: 40px;
  ${({ metric }) => css.fitContentWidth(metric)};
`
