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
`
export const Block = styled.div<TActive>`
  position: relative;
  width: 168px;
  height: 110px;
  margin-right: 16px;
  margin-bottom: 10px;
  border-radius: 4px;
  overflow: hidden;
  border: 2px solid;
  border-color: ${({ $active }) =>
    $active ? theme('thread.articleTitle') : 'transparent'};
  opacity: ${({ $active }) => ($active ? 1 : 0.85)};

  &:hover {
    border-color: ${theme('thread.articleTitle')};
    cursor: pointer;
    opacity: 0.85;
  }

  transition: all 0.2s linear;
`
export const Image = styled(Img)`
  width: 100%;
  object-fit: cover;
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
