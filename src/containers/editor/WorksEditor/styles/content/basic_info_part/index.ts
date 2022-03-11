import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css, { theme } from '@/utils/css'
import FormInput from '@/widgets/Input'

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
export const SectionHint = styled.div`
  color: ${theme('thread.articleDigest')};
  opacity: 0.8;
  font-size: 12px;
  margin-top: 6px;
  margin-left: 12px;
`
export const Label = styled.div`
  ${css.flex('justify-between', 'align-end')};
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  margin-bottom: 8px;
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
  padding-left: 12px;
  height: 36px;
  width: 100%;
  font-size: 15px;
`
export const SelectWrapper = styled.div`
  padding: 5px 5px;
`
export const CheckWrapper = styled.div`
  ${css.flex('align-center')};
  margin-left: 12px;
  margin-top: 15px;
`
export const TeamsWrapper = styled.div`
  margin-top: 20px;
  margin-left: 10px;
`
