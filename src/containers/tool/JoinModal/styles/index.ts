import styled from 'styled-components'

import { TTestable } from '@/types'
// import Img from '@/Img'
// import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>``

export const holder = styled.div``
