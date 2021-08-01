import styled from 'styled-components'

import type { TTestable } from '@/spec'
import { theme } from '@/utils/themes'
import css from '@/utils/css'
import Img from '@/Img'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn('align-start')};
  margin-top: 80px;
`
export const Icon = styled(Img)`
  ${css.size(26)};
  fill: ${theme('thread.articleTitle')};
  margin-right: 10px;
`
export const Header = styled.div`
  ${css.flex('align-center')};
  font-size: 18px;
  color: ${theme('thread.articleTitle')};
  border-bottom: 1px solid;
  border-bottom-color: #004758;
  padding-bottom: 5px;
  margin-bottom: 30px;
`
export const Content = styled.div`
  width: 540px;
  min-height: 200px;
`
export const QTitle = styled.div`
  font-size: 16px;
  color: ${theme('thread.articleTitle')};
  margin-bottom: 8px;
`
export const ABody = styled.div`
  font-size: 14px;
  color: ${theme('thread.articleDigest')};
  margin-bottom: 30px;
`
