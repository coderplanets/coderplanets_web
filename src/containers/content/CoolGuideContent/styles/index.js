import styled from 'styled-components'

// import Img from '@Img'
import { cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-both')}
  width: 100%;
`
export const InnerWrapper = styled.div`
  ${cs.flex()};
  padding: 10px 6vw;
  margin-top: 12px;
  width: 100%;
  max-width: ${cs.MAX_CONTENT_WIDTH};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 4px;
`

export const ContentWrapper = styled.div`
  ${cs.flexColumnGrow()};
  max-width: calc(100% - 170px);
`
