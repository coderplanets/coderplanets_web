import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css, { theme } from '@/utils/css'
import { BaseInput } from './index'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn('align-center', 'justify-start')};
  width: 100%;
  color: ${theme('thread.articleDigest')};
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 20px;
  margin-bottom: 8px;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 15px;
  margin-bottom: 15px;
  margin-left: 10px;
`
export const Input = styled(BaseInput)`
  text-align: center;
  padding: 3px 15px;
  height: 45px;
  width: calc(100% - 70px);
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 6px;
`
