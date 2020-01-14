import styled from 'styled-components'

// import Img from '@components/Img'
import { cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-both')}
  width: 100%;
`
export const InnerWrapper = styled.div`
  ${cs.flex()};
  padding: 15px 25px;
  width: 90%;
  min-height: 100vh;
  margin-top: 20px;
  max-width: ${cs.ARTICLE_PAGE_MAX_CONTENT_WIDTH};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 4px;
`
