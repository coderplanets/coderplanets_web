import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  position: relative;
  //${theme('bodyBg')};
  width: 100%;
  min-width: 650px;
  /* padding: 10px 40px; */
`
export const MenusWrapper = styled.div`
  ${css.flex('align-center', 'justify-between')};
  width: 100%;
  /* border: 1px solid tomato; */
  position: absolute;
  top: 18px;
  padding-left: 46px;
  padding-right: 13px;
  margin-top: 8px;
`
export const EditorWrapper = styled.div`
  border: 1px solid #003442;
  padding-top: 55px;
  padding-bottom: 32px;
  padding-left: 44px;
  padding-right: 44px;
  background: #052630;
  border-radius: 18px;
  /* border: 1px solid #003442; */
`
