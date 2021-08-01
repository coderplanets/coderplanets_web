import styled from 'styled-components'

import type { TTestable } from '@/spec'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn('align-both')};
  width: 100%;
  min-height: 70vh;
  padding-right: 10%;
`
export const Header = styled.div`
  ${css.flexColumn('align-center')};
  margin-bottom: 20px;
`
export const Title = styled.div`
  font-size: 20px;
  color: ${theme('thread.articleTitle')};
`
export const Slogan = styled.div`
  font-size: 15px;
  color: ${theme('thread.articleDigest')};
  margin-top: 5px;
`
