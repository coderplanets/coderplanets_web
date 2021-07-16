import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('align-center', 'justify-between')};
  width: 100%;
  height: 60px;
  border-bottom: 1px solid;
  border-bottom-color: ${theme('drawer.divider')};
`
export const BaseWrapper = styled.div`
  ${css.flex('align-center')};
`
export const ViewIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(16)};
  margin-right: 5px;
`
export const Count = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 15px;
`
export const UpvoteWrapper = styled.div``
