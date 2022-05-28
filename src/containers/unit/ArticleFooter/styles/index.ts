import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>``

export const BaseInfo = styled.div`
  ${css.flex('align-center', 'justify-between')};
  margin-bottom: 30px;
  padding-left: 0;
  padding-right: 10px;

  ${css.media.mobile`
    margin-top: 20px;
  `};
`
