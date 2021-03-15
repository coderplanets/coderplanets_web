import styled from 'styled-components'

import type { TTestable } from '@/spec'
import { css, theme } from '@/utils'
import { BaseInput } from './index'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn('align-center', 'justify-start')};
  width: 100%;
  height: 300px;
  color: ${theme('thread.articleDigest')};
`
export const Label = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 16px;
  margin-bottom: 15px;
  margin-left: 5px;
`
export const Input = styled(BaseInput)`
  text-align: center;
  padding: 3px 15px;
  height: 45px;
  width: auto;
  font-size: 18px;
`
