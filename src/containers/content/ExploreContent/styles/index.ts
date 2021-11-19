import styled from 'styled-components'

import type { TMetric } from '@/spec'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  width: 100%;
`
export const ContentWrapper = styled.div<{ center: boolean }>`
  ${css.flex('align-both')};
  margin-top: 45px;
  margin-left: ${({ center }) => (center ? '5%' : 'none')};
  transition: all 0.2s;
`
export const InnerWrapper = styled.div<{ metric: TMetric }>`
  ${css.flex()};
  width: 100%;
  height: 100%;
  ${({ metric }) => css.fitContentWidth(metric)};
`
export const ContentsWrapper = styled.div<{ center: boolean }>`
  ${css.flexColumn('justify-center')};
  width: ${({ center }) => (center ? '100%' : 'calc(100% - 140px)')};
  transition: all 0.2s;
`
export const Text = styled.div``
