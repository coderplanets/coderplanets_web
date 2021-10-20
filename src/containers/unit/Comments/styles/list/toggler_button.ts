import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  padding-top: 12px;
  padding-bottom: 18px;
  margin-left: 25px;
`
export const SlashSign = styled.div`
  font-size: 10px;
  font-weight: bolder;
  font-family: cursive;
  margin-left: 6px;
  opacity: 0.8;
`
export const DividerLine = styled.div`
  width: 10px;
  height: 1px;
  background: ${theme('thread.articleDigest')};
  opacity: 0.6;
  margin-left: 7px;
  margin-right: 7px;
`
export const Text = styled.div`
  font-size: 12px;
  opacity: 0.8;
  color: ${theme('button.primary')};

  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  transition: all 0.2s;
`
