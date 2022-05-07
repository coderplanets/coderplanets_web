import styled from 'styled-components'

import type { TTestable } from '@/spec'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  padding: 32px 150px;
  padding-left: 152px;
`
export const CommentsWrapper = styled.div`
  min-height: 400px;
  margin-top: 32px;
  border-radius: 5px;
`
