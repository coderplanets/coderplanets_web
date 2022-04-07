import styled from 'styled-components'

import type { TTestable } from '@/spec'

import Input from '@/widgets/Input'
import Button from '@/widgets/Buttons/Button'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn()};
  width: 200px;
  min-width: 200px;
  color: ${theme('thread.articleDigest')};
  padding-top: 25px;
`
export const SearchInput = styled(Input)`
  width: 180px;
  font-size: 13px;
  text-align: center;
  border-radius: 15px;

  ::placeholder {
    color: ${theme('form.text')};
    opacity: 0.6;
  }
`
export const NewButton = styled(Button)`
  width: 180px;
  border-radius: 12px;
`
export const BtnText = styled.div`
  margin-left: 4px;
  font-size: 15px;
  margin-top: 2px;
`
