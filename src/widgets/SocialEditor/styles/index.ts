import styled from 'styled-components'

import type { TTestable } from '@/spec'

import css, { theme } from '@/utils/css'

import Input from '@/widgets/Input'
import Img from '@/Img'

// import { theme } from '@/utils/themes'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  margin-bottom: 20px;
`
export const Label = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 14px;
  margin-bottom: 10px;
`
export const InputWrapper = styled.div`
  ${css.flex('align-center')};
`
export const Inputer = styled(Input)`
  width: 265px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`
export const IconWrapper = styled.div`
  border: 1px solid;
  border-color: ${theme('editor.border')};
  ${css.flex('align-both')};
  width: 38px;
  height: 34px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-right: none;
`
export const SocialIcon = styled(Img)`
  ${css.size(16)};
`
