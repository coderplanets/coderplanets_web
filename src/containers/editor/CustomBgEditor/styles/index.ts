import styled from 'styled-components'

import type { TTestable } from '@/spec'
import { theme } from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  padding: 30px;
`
export const Title = styled.div`
  font-size: 17px;
  color: ${theme('thread.articleTitle')};
  font-weight: bold;
  margin-bottom: 16px;
  margin-left: 2px;
`
export const Content = styled.div`
  margin-top: 20px;
  padding: 0 2px;
`
