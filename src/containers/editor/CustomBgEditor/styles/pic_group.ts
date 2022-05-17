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
  height: 130px;
  margin-right: 16px;
  margin-bottom: 10px;
  border-radius: 4px;
  overflow: hidden;
  border: 2px solid;
  border-color: ${({ $active }) =>
    $active ? theme('thread.articleTitle') : 'transparent'};

  &:hover {
    border-color: ${theme('thread.articleTitle')};
    cursor: pointer;
  }

  transition: border-color 0.1s linear;
`
export const Image = styled(Img)`
  width: 100%;
  object-fit: cover;
`
export const ActiveSign = styled.div`
  ${css.size(25)};
  background: ${theme('border')};
  position: absolute;
  top: 0;
  right: 0;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 15px;
  z-index: 3;
`
export const CheckIcon = styled(CheckedSVG)`
  fill: ${theme('thread.articleTitle')};
  ${css.size(18)};
  position: absolute;
  top: 3px;
  left: 6px;
`
