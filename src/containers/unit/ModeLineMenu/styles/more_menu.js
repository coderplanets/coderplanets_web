import styled from 'styled-components'

import { css } from '@/utils'
import { L_MENU_HEIGHT } from './metrics'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${css.flex('align-both')};
  height: ${L_MENU_HEIGHT};
  margin-top: -20px;
`
export const Title = styled.div``
