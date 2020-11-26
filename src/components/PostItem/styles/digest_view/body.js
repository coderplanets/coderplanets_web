import styled from 'styled-components'

import { theme, css } from '@/utils'
import Img from '@/Img'
import DotDivider from '@/components/DotDivider'

export const Wrapper = styled.div`
  margin-left: 10px;
  margin-top: -10px;
`
export const Extra = styled.li`
  ${css.flex('align-center')};
  color: ${theme('thread.extraInfo')};
  opacity: 0.7;
  transition: opacity 0.2s;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 1px;
`
export const AuthorName = styled.div`
  color: ${theme('thread.extraInfo')};
  font-size: 13px;
`
export const PublishTime = styled.div`
  font-size: 12px;
`
export const Dot = styled(DotDivider)`
  background: ${theme('thread.extraInfo')};
  margin-right: 8px;
`
export const ItemWrapper = styled.div`
  ${css.flex('align-center')};
  margin-left: 10px;
`
export const ViewsIcon = styled(Img)`
  fill: ${theme('thread.extraInfo')};
  ${css.size(12)};
  opacity: 0.6;
  margin-right: 3px;
`
