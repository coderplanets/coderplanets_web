import styled from 'styled-components'

// import { theme } from '@/utils'
import { css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  min-width: 250px;
  ${css.media.tablet`display: none`};
`
export const holder = 1
