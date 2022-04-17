import { theme } from '@/utils'
import styled from 'styled-components'

// import { theme } from '@/utils/css'

export const Wrapper = styled.div<{ noBg: boolean }>`
  color: ${theme('gtdBadge.feat')};
  background-color: ${({ noBg }) =>
    noBg ? 'transparent' : theme('gtdBadge.featBg')};
  padding: ${({ noBg }) => (noBg ? 0 : '2px 6px')};
  font-weight: 500;
  border-radius: ${({ noBg }) => (noBg ? 0 : '6px')};
  border-radius: 6px;
  font-size: 12px;
`
export const BugWrapper = styled(Wrapper)<{ noBg: boolean }>`
  color: ${theme('gtdBadge.bug')};
  background-color: ${({ noBg }) =>
    noBg ? 'transparent' : theme('gtdBadge.bugBg')};
`
