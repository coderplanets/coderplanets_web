import styled from 'styled-components'

import type { TTestable } from '@/spec'
import { theme } from '@/utils/themes'
import css from '@/utils/css'
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
  margin-left: 10px;
`
export const Input = styled(BaseInput)`
  text-align: center;
  padding: 3px 15px;
  height: 45px;
  width: calc(100% - 70px);
  margin-left: 35px;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 6px;
`
export const NextButtonWrapper = styled.div`
  margin-left: -30px;
  margin-top: 14px;
`
