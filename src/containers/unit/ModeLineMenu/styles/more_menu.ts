import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css from '@/utils/css'

import { L_MENU_HEIGHT } from './metrics/index'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flex('align-both')};
  height: ${L_MENU_HEIGHT};
  margin-top: -20px;
`
export const Title = styled.div``
