import styled from 'styled-components'

import { cs, theme } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-start')};
`
export const Title = styled.div`
  color: ${theme('tooltip.text')};
  font-weight: bold;
  font-size: 1rem;
`
export const Desc = styled.div`
  color: ${theme('tooltip.text')};
  margin-top: 10px;
  margin-left: 7px;
  font-size: 0.9rem;
  opacity: 0.8;
`
