import styled from 'styled-components'

import Img from '@Img'
import { theme } from '@utils'

import { Item } from './index'

export const Wrapper = styled.div`
  position: relative;
`
export const Num = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 11px;
  display: block;

  ${Item}:hover & {
    color: ${theme('thread.articleTitle')};
  }

  ${Wrapper}:hover & {
    display: none;
  }
`
export const PinIcon = styled(Img)`
  fill: ${theme('button.primary')};
  display: none;
  width: 16px;
  height: 16px;

  &:hover {
    cursor: pointer;
  }

  ${Wrapper}:hover & {
    display: block;
  }
`
export const TooltipPopContent = styled.div`
  padding: 3px 6px;
`
