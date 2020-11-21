import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

import { getIconSize, getFontSize } from './metric'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${css.flex('align-center')};
  cursor: pointer;
`
export const Box = styled.div`
  width: ${({ size }) => getIconSize(size)};
  height: ${({ size }) => getIconSize(size)};

  border-radius: 4px;
  background: #052630;

  transition: all 0.2s;
`
export const CheckedIcon = styled(Img)`
  width: ${({ size }) => getIconSize(size)};
  height: ${({ size }) => getIconSize(size)};
  fill: ${theme('button.primary')};
  display: block;
`
export const UnCheckedBox = styled(Box)`
  ${css.flex('align-both')};
  border: 1px solid;
  border-color: #0a5269;
  border-radius: 4px;
  background: #052630;

  &:hover {
    border-color: ${theme('button.primary')};
  }

  ${Wrapper}:hover & {
    border-color: ${theme('button.primary')};
  }

  transition: all 0.2s;
`
export const Title = styled.div`
  color: ${({ checked }) =>
    checked ? theme('thread.articleTitle') : theme('thread.articleDigest')};
  font-size: ${({ size }) => getFontSize(size)};
  margin-left: 8px;
`
