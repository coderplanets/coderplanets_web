import styled from 'styled-components'

import type { TTestable } from '@/spec'
import { css } from '@/utils'

type TInnerWrapper = {
  testid: string
}

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TInnerWrapper>`
  ${css.flexColumn('align-both')};
`
export const UpWrapper = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 2px;
`
export const CountWrapper = styled.div`
  margin-left: 7px;
  margin-top: -4px;
`
export const Avatars = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 10px;
`
export const DescWrapper = styled.div`
  ${css.flexColumn('align-center')};
  min-width: 150px;
`
