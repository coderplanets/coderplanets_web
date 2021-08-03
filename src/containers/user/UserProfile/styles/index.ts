import styled from 'styled-components'

import type { TTestable } from '@/spec'
import { theme } from '@/utils/themes'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>``
export const ContributesWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 10px;
`
export const Divider = styled.div`
  width: 100%;
  padding: 0 5px;
  height: 1px;
  background: ${theme('thread.articleDigest')};
  opacity: 0.2;
  margin-top: 40px;
  margin-bottom: 40px;
`
