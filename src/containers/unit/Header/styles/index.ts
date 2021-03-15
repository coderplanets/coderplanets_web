import styled from 'styled-components'

import type { TTestable } from '@/spec'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  position: relative;
`
export const MobileWrapper = styled.div`
  width: 100%;
  height: 0px;
`
