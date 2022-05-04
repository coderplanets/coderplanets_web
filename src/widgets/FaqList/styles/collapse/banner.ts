import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import { Wrapper as MainWrapper } from './index'

export const Wrapper = styled.div`
  position: relative;
  ${css.flex('align-both')};
  margin-bottom: 34px;
  margin-left: -40px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 20px;
  font-weight: 500;
`
export const MenuWrapper = styled.div`
  position: absolute;
  right: 10px;
  cursor: pointer;
  display: none;

  ${MainWrapper}:hover & {
    display: block;
  }
`
