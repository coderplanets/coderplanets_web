import styled from 'styled-components'

import Img from '@/Img'
import { theme, cs } from '@/utils'

import {
  getWidth,
  getIconSize,
  getFontSize,
  getMargin,
  getSimpleMargin,
} from './metircs/arrow_button'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};
  opacity: ${({ dimWhenIdle }) => (dimWhenIdle ? '0.65' : 1)};
  min-width: ${({ size, width }) => getWidth(size, width)};

  &:hover {
    cursor: pointer;
    color: ${theme('thread.articleTitle')};
    opacity: 1;
  }
  transition: all 0.25s;
`
export const Text = styled.div`
  font-size: ${({ size }) => getFontSize(size)};
  color: #327ca1;
`
export const Icon = styled(Img)`
  fill: #327ca1;
  width: ${({ size }) => getIconSize(size)};
  height: ${({ size }) => getIconSize(size)};
  display: block;
  transition: all 0.2s;
`
export const LeftIcon = styled(Icon)`
  margin-right: ${({ size, arrowStyle }) =>
    arrowStyle === 'default' ? getMargin(size) : getSimpleMargin(size)};

  ${Wrapper}:hover & {
    margin-right: ${({ size, arrowStyle }) =>
      arrowStyle === 'default'
        ? getMargin(size, true)
        : getSimpleMargin(size, true)};
    fill: #327ca1;
  }
`
export const RightIcon = styled(Icon)`
  transform: rotate(180deg);
  margin-left: ${({ size, arrowStyle }) =>
    arrowStyle === 'default' ? getMargin(size) : getSimpleMargin(size)};

  ${Wrapper}:hover & {
    margin-left: ${({ size, arrowStyle }) =>
      arrowStyle === 'default'
        ? getMargin(size, true)
        : getSimpleMargin(size, true)};
    fill: #327ca1;
  }
`
