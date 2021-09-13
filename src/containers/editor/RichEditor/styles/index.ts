import styled from 'styled-components'

import css from '@/utils/css'
import { theme } from '@/utils/themes'

export const Wrapper = styled.div`
  ${css.flexColumn('align-center')};
  position: relative;
  /* border: 1px solid tomato; */

  //${theme('bodyBg')};
  width: 100%;
  min-width: 650px;
  /* padding: 10px 40px; */
`
export const EditorWrapper = styled.div`
  margin-top: 150px;
  min-height: 500px;
  //
  width: 650px;
  border: 1px solid;
  border-color: #024b5f;
  padding-top: 55px;
  padding-bottom: 32px;
  padding-left: 44px;
  padding-right: 44px;
  background: #052630;
  border-radius: 18px;
`
