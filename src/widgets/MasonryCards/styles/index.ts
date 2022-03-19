import styled from 'styled-components'

import type { TTestable } from '@/spec'
// import css from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>``

export const Title = styled.div``
