import styled from 'styled-components'

import type { TActive } from '@/spec'
import Img from '@/Img'
import css, { theme } from '@/utils/css'
import CheckedSVG from '@/icons/Checked'

export const Wrapper = styled.div`
  ${css.flex()};
  width: calc(100% + 30px);
  flex-wrap: wrap;
  margin-top: 10px;
  margin-left: 1px;
`

type TBlock = {
  background: string
} & TActive

export const Block = styled.div<TBlock>`
  position: relative;
  ${css.circle(32)};
  margin-right: 18px;
  margin-bottom: 10px;
  background: ${({ background }) => background || 'transparent'};
  background-size: 200px;

  &:hover {
    border-color: ${theme('thread.articleTitle')};
    cursor: pointer;
  }

  transition: border-color 0.1s linear;
`
export const Image = styled(Img)<{ bgColor?: string }>`
  width: 100%;
  object-fit: cover;
  background-color: ${({ bgColor }) => bgColor || 'transparent'};
`
export const ActiveSign = styled.div`
  ${css.size(24)};
  background: ${theme('border')};
  position: absolute;
  top: -1px;
  right: -1px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 30px;
  z-index: 3;
  border: 1px solid;
  border-color: ${theme('thread.articleTitle')};
`
export const CheckIcon = styled(CheckedSVG)`
  fill: ${theme('thread.articleTitle')};
  ${css.size(16)};
  position: absolute;
  top: 2px;
  left: 6px;
`
