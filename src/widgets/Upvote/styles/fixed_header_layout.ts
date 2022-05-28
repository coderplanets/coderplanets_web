import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css, { theme } from '@/utils/css'

type TInnerWrapper = {
  testid: string
}

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TInnerWrapper>`
  ${css.flex('align-center')};
`
export const UpvoteBtnWrapper = styled.div`
  transform: scale(0.9);
  margin-top: 4px;
`
export const Count = styled.div<{ noOne: boolean }>`
  color: ${theme('thread.extraInfo')};
  font-weight: ${({ noOne }) => (noOne ? 400 : 600)};
  font-size: 16px;
`
