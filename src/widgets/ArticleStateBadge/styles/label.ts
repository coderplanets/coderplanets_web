import { theme } from '@/utils'
import styled from 'styled-components'

// import { theme } from '@/utils/css'

export const Wrapper = styled.div<{ kanbanLayout: boolean }>`
  color: ${theme('gtdBadge.feat')};
  background-color: ${({ kanbanLayout }) =>
    kanbanLayout ? 'transparent' : theme('gtdBadge.featBg')};
  padding: ${({ kanbanLayout }) => (kanbanLayout ? 0 : '2px 6px')};
  font-weight: ${({ kanbanLayout }) => (kanbanLayout ? 400 : 600)};
  border-radius: ${({ kanbanLayout }) => (kanbanLayout ? 0 : '6px')};
  border-radius: 6px;
  font-size: 12px;
`
export const BugWrapper = styled(Wrapper)<{ kanbanLayout: boolean }>`
  color: ${theme('gtdBadge.bug')};
  background-color: ${({ kanbanLayout }) =>
    kanbanLayout ? 'transparent' : theme('gtdBadge.bugBg')};
`
export const QuestionWrapper = styled.div<{ articleInfoLayout: boolean }>`
  color: ${theme('baseColor.green')};
  font-weight: 600;
  font-size: ${({ articleInfoLayout }) =>
    articleInfoLayout ? '13px' : '12px'};
  margin-right: ${({ articleInfoLayout }) => (articleInfoLayout ? '0' : '6px')};
  margin-top: 2px;
`
export const LockWrapper = styled.div<{ articleInfoLayout: boolean }>`
  color: ${theme('thread.extraInfo')};
  font-size: ${({ articleInfoLayout }) =>
    articleInfoLayout ? '14px' : '12px'};
  margin-right: ${({ articleInfoLayout }) => (articleInfoLayout ? '0' : '6px')};
  margin-top: 2px;
`
