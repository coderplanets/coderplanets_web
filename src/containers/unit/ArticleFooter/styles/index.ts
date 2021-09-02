import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>``

export const BaseInfo = styled.div`
  ${css.flex('justify-between', 'align-center')};
  margin-bottom: 30px;

  ${css.media.mobile`
    margin-top: 20px;
  `};
`
