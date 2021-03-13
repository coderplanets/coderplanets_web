import styled from 'styled-components'

import { TTestable } from '@/spec'
import { css } from '@/utils'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>``

export const BaseInfo = styled.div`
  ${css.flex('justify-between', 'align-end')};
  margin-top: 50px;
  margin-bottom: 30px;

  ${css.media.mobile`
    margin-top: 20px;
  `};
`
