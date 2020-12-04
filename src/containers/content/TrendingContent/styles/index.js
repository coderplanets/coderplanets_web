import styled from 'styled-components'

// import Img from '@/Img'
import { css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flexColumn('align-both')}
  width: 100%;
`
export const InnerWrapper = styled.div`
  ${css.flex()};
  padding: 10px 0;
  margin-top: 12px;
  width: 100%;
  ${({ metric }) => css.fitInnerWidth(metric)};
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
