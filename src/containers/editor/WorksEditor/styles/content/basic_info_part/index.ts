import styled from 'styled-components'

import type { TTestable } from '@/spec'
import { theme } from '@/utils/themes'
import css from '@/utils/css'
import FormInput from '@/components/Input'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn('align-start', 'justify-start')};
  width: 100%;
  min-height: 300px;
  color: ${theme('thread.articleDigest')};
  padding: 20px 0;
  margin-top: 30px;
`
export const Section = styled.section`
  width: 100%;
  margin-bottom: 25px;
  outline: none;
`
export const Label = styled.div`
  ${css.flex('justify-between', 'align-end')};
  color: ${theme('thread.articleDigest')};
  font-size: 15px;
  margin-bottom: 6px;
  margin-left: 12px;
  margin-right: 10px;
`
export const Hint = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
  opacity: 0.8;
`
export const Input = styled(FormInput)`
  text-align: left;
  padding: 5px 5px;
  height: 36px;
  width: 100%;
  font-size: 16px;
`
export const SelectWrapper = styled.div`
  padding: 5px 5px;
`
export const CheckWrapper = styled.div`
  margin-left: 12px;
  margin-top: 12px;
`
export const Footer = styled.div`
  ${css.flex('align-both')};
  width: 100%;
  border-top: 2px solid;
  border-top-color: #03343f;
  margin-top: 35px;
  padding-top: 20px;
`
