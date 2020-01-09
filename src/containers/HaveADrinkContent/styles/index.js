import styled from 'styled-components'

// import Img from '@components/Img'
import { theme, cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-both')}
  width: 100%;
  height: 96vh;
`

export const InnerWrapper = styled.div`
  ${cs.flexColumn('align-both')}
  justify-content: space-between;
  padding: 15px 25px;
  width: 90%;
  height: 92%;
  max-width: ${cs.ARTICLE_PAGE_MAX_CONTENT_WIDTH};
  border-radius: 8px;
  background: ${theme('thread.bg')};
  box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 4px;
`
