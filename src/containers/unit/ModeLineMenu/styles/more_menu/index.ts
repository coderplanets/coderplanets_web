import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css, { theme } from '@/utils/css'

import { L_MENU_HEIGHT } from '../metrics/index'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flex('align-both')};
  height: ${L_MENU_HEIGHT};
  margin-top: -20px;
`
export const A = styled.a`
  color: ${theme('thread.articleTitle')};
  text-decoration: none;

  &:active {
    color: ${theme('thread.articleTitle')};
    text-decoration: none;
  }

  &:hover {
    color: ${theme('thread.articleTitle')};
    text-decoration: none;
  }
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
`
