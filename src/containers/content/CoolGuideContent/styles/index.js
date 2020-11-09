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
  ${css.flex('justify-center')};
  margin-top: 12px;
  width: 100%;
  border-radius: 8px;
`
export const ContentWrapper = styled.div`
  ${css.flexColumnGrow()};
  max-width: ${({ marginRight }) =>
    marginRight ? 'calc(100% - 170px)' : '100%'};
`
