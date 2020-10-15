import styled from 'styled-components'

// import Img from '@/Img'
import { css } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${css.flexColumn('align-both')}
  width: 100%;
`
export const InnerWrapper = styled.div`
  ${css.flex()};
  padding: 10px 6vw;
  margin-top: 12px;
  width: 100%;
  max-width: ${css.MAX_CONTENT_WIDTH};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 4px;
`

export const ContentWrapper = styled.div`
  ${css.flexColumnGrow()};
  max-width: ${({ marginRight }) =>
    marginRight ? 'calc(100% - 170px)' : '100%'};
`
