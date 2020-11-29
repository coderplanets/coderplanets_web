import styled from 'styled-components'

import { css, theme } from '@/utils'
import Img from '@/Img'

import { SubTitleWrapper } from './index'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  position: absolute;
  top: 21px;
  left: -66px;
  ${css.flex('align-center')};
  width: 60px;
  cursor: pointer;
  visibility: hidden;

  ${SubTitleWrapper}:hover & {
    visibility: visible;
  }

  transition: visibility 0.2s;
`
export const Icon = styled(Img)`
  fill: ${theme('editor.placeholder')};
  ${css.size(12)};

  ${Wrapper}:hover & {
    fill: ${theme('baseColor.red')};
  }
`
export const Title = styled.div`
  font-size: 12px;
  color: ${theme('editor.placeholder')};
  margin-left: 5px;

  ${Wrapper}:hover & {
    color: ${theme('baseColor.red')};
  }
`
