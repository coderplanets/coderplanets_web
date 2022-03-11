import styled from 'styled-components'
import Input from '@/widgets/Input'

import type { TTestable } from '@/spec'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn()};
  width: 100%;
  min-height: 90px;
`
export const Divider = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
  background: #003b49;
  margin-top: 18px;
  margin-bottom: 20px;
`
export const TitleInput = styled(Input)`
  margin-top: 15px;
  border: none !important;
  padding-left: 0;
  padding-top: 2px;
  border-radius: 0;
  line-height: 1.4;

  min-height: 28px;
  font-size: 25px;
  color: ${theme('thread.articleTitle')};
  /* background: ${theme('editor.headerBg')}; */
  background: transparent;
  width: 100%;

  &:hover {
    border: none;
  }
  &:focus {
    border: none;
    box-shadow: none;
  }
  &:active {
    border: none;
    box-shadow: none;
  }
`
export const SubTitleWrapper = styled.div`
  position: relative;
  width: 100%;
`
export const SubTitleInput = styled(TitleInput)`
  min-height: 18px;
  font-size: 18px;
  color: ${theme('thread.articleDigest')};
`
