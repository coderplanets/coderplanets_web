import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import { getInfoPanelHeight } from '../metric'

export const Wrapper = styled.div<{ type: string }>`
  padding: 20px 40px;
  width: 100%;
  height: ${({ type }) => getInfoPanelHeight(type)};
  background: ${theme('modal.subPanel')};
  color: ${theme('thread.articleTitle')};
  transition: all 0.1s;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  ${css.media.mobile`
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 60px;
  `};
`
export const holder = 1
