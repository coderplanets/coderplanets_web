import styled from 'styled-components'

import type { TActive } from '@/spec'
import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center', 'justify-between')}
  width: 100%;
  margin-bottom: 4px;
`
export const Title = styled.div<TActive>`
  position: relative;
  color: ${theme('thread.articleTitle')};
  font-size: 15px;
  padding-left: 5px;

  &:before {
    content: '';
    width: 6px;
    height: 6px;
    background: #00999d;
    position: absolute;
    left: -10px;
    top: 8px;
    border-radius: 50%;
    display: ${({ active }) => (active ? 'block' : 'none')};
  }
`
export const OperatorsWrapper = styled.div`
  ${css.flex('align-center')};
`
export const Operator = styled.div<TActive>`
  color: ${theme('thread.articleDigest')};
  display: ${({ show }) => (show ? 'flex' : 'none')};
  align-items: center;
  font-size: 12px;
  opacity: 0.7;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`
export const ResetIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(14)};
  margin-right: 6px;

  &:hover {
    fill: ${theme('thread.articleTitle')};
    cursor: pointer;
  }

  transition: all 0.2s;
`
export const HelpHint = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
`
