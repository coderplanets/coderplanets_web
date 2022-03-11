import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css, { theme } from '@/utils/css'
import Img from '@/Img'

import { Wrapper as HeaderWrapper } from './index'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  position: absolute;
  top: -8px;
  left: -78px;
  ${css.flex('align-center')};
  width: 60px;
  cursor: pointer;
  visibility: hidden;

  ${HeaderWrapper}:hover & {
    visibility: visible;
  }

  transition: visibility 0.2s;
`
export const Icon = styled(Img)`
  fill: ${theme('editor.placeholder')};
  ${css.size(12)};

  ${Wrapper}:hover & {
    fill: ${theme('editor.title')};
  }
`
export const Title = styled.div`
  font-size: 12px;
  color: ${theme('editor.placeholder')};
  margin-left: 5px;

  ${Wrapper}:hover & {
    color: ${theme('editor.title')};
  }
`
