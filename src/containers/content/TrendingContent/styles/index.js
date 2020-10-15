import styled from 'styled-components'

// import Img from '@/Img'
import { css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flexColumn('align-both')}
  width: 100%;
`
export const InnerWrapper = styled.div`
  ${css.flex()};
  padding: 10px 6vw;
  padding-left: calc(6vw - 45px);
  margin-top: 12px;
  width: 100%;
  max-width: ${css.MAX_CONTENT_WIDTH};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 4px;
`
export const SwitchBtn = styled.div`
  margin-right: 15px;
  margin-top: 38px;
`
export const ContentWrapper = styled.div`
  ${css.flexColumnGrow()};
  max-width: calc(100% - 60px);
`
