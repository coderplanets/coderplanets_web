import styled from 'styled-components'

import { theme } from '@/utils/css'

export const Wrapper = styled.div`
  color: #3871e0;
  /* background: #edf3ff; */
  /* background: #f8f8f8; */
  background: ${theme('textBadge')};
  padding: 2px 6px;
  font-weight: 500;
  border-radius: 6px;
  font-size: 12px;
`
export const BugWrapper = styled(Wrapper)`
  color: #eb6a6a;
  /* background: #ffeded; */
  /* background: #f8f8f8; */
  background: ${theme('textBadge')}; ;
`
