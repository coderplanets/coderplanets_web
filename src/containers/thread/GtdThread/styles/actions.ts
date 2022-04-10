import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import KanbanSVG from '@/icons/Kanban'

export const Wrapper = styled.div`
  ${css.flex('justify-between', 'align-center')};
  padding: 0 2px;
`
export const Title = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  font-size: 16px;
  font-weight: 500;
  margin-top: 6px;
`
export const Count = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
  margin-left: 10px;
  opacity: 0.8;
  margin-top: 2px;
  font-weight: 400;
`
export const LeftPart = styled.div`
  ${css.flex('align-center')};
`
export const KanbanIcon = styled(KanbanSVG)`
  ${css.size(13)};
  fill: ${theme('thread.extraInfo')};
  margin-right: 10px;
  margin-top: 6px;
`
export const ModeWrapper = styled.div`
  margin-top: 2px;
  transform: scale(0.85);
`
export const RightPart = styled.div`
  ${css.flex('align-center')};
`
export const JoinTitle = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
  margin-right: 10px;
  margin-top: 3px;
`
