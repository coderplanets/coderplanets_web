import styled from 'styled-components'

import { cs, theme } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
`

export const ErrText = styled.div`
  color: ${theme('baseColor.error')};
`
