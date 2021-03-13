import styled from 'styled-components'

import { TTestable } from '@/types'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>``

export const holder = 1
