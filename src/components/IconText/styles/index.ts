import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

import { getIconSize, getTextSize, getMargin } from './metric'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testid,
}))`
  ${css.flex('align-center')};
`
export const Icon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: ${({ size }) => getIconSize(size)};
  height: ${({ size }) => getIconSize(size)};
  margin-right: ${({ size, margin }) => margin || getMargin(size)};
  display: block;
  border-radius: ${({ round }) => (round ? '100%' : '0')};
`
export const Text = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  font-size: ${({ size }) => getTextSize(size)};
`
