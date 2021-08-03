import styled from 'styled-components'

// import Img from '@/Img'
import type { TMetric } from '@/spec'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn('align-both')}
  width: 100%;
`
export const InnerWrapper = styled.div<{ metric: TMetric }>`
  ${css.flex()};
  padding: 10px 0;
  margin-top: 12px;
  width: 100%;
  ${({ metric }) => css.fitContentWidth(metric)};
  margin-left: -80px;
`
export const SwitchBtn = styled.div`
  margin-right: 15px;
  margin-top: 38px;
`
export const ContentWrapper = styled.div`
  ${css.flexColumnGrow()};
  width: 100%;
`
