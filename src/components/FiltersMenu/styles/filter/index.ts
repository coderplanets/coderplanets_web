import styled from 'styled-components'

import type { TActive } from '@/spec'
// import Img from '@/Img'
import { css, theme } from '@/utils'

const activeColor = '#009C9E'
export const Wrapper = styled.div<{ revert: boolean }>`
  ${css.flexColumn()};
  align-items: ${({ revert }) => (revert ? 'flex-start' : 'flex-end')};
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  padding: 4px 6px;
  padding-top: 0;
`
type RadioWrapper = { revert?: boolean }
export const RadioWrapper = styled.div<RadioWrapper>`
  ${css.flexColumn()};
  align-items: ${({ revert }) => (revert ? 'flex-start' : 'flex-end')};
  margin-top: 5px;
`
export const RadioItem = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 8px;
  margin-right: -1px;
  letter-spacing: 3px;
  &:hover {
    cursor: pointer;
  }
`
export const ActiveDot = styled.div<TActive>`
  background: #27908f;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-right: 12px;
  opacity: 0;

  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: opacity 0.25s;
`
type TRadioTitle = TActive & { revert?: boolean }
export const RadioTitle = styled.div<TRadioTitle>`
  font-size: 13px;
  color: ${({ active }) =>
    active ? activeColor : theme('thread.articleDigest')};
  margin-right: ${({ revert }) => (revert ? '6px' : '0')};
  margin-left: ${({ revert }) => (revert ? '1px' : '0')};

  &:hover {
    color: ${({ active }) =>
      active ? activeColor : theme('thread.articleTitle')};
  }

  transition: all 0.25s;
`
export const Item = styled.div<{ revert: boolean }>`
  ${css.flex('align-center')};
  justify-content: ${({ revert }) => (revert ? 'flex-start' : 'flex-end')};
  width: 100%;
`
