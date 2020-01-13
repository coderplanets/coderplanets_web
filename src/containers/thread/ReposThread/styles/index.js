import styled from 'styled-components'
import { Button } from 'antd'

import { cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flex()};
  max-width: ${cs.MAX_CONTENT_WIDTH};
  width: 100%;
`
export const ViewerWrapper = styled.div`
  margin-top: -6px;
`
export const LeftPart = styled.div`
  flex-grow: 1;
  width: 100%;
`
export const RightPart = styled.div`
  min-width: 200px;
  margin-left: 30px;
  padding-top: 5px;
  ${cs.media.tablet`display: none;`};
`
/* fill: ${theme('shell.searchIcon')}; */
export const PublishBtn = styled(Button)`
  margin-top: 8px;
  width: 100%;
  max-width: 180px;
  margin-left: 8%;
`
export const FilterWrapper = styled.div`
  ${cs.flex('align-center')};
  margin-bottom: 8px;
  margin-left: 8px;
`
