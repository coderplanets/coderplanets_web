import styled from 'styled-components'

import type { TActive } from '@/spec'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

import { Wrapper as AddonWrapper } from './index'

export const Wrapper = styled.div<TActive>`
  ${css.flexColumn('justify-evenly', 'align-center')};
  opacity: ${({ show }) => (show ? 1 : 0)};
  position: relative;

  color: ${theme('drawer.font')};
  width: 35px;
  height: 70px;
  margin-right: 6px;
  margin-top: 44vh;

  opacity: 0;

  ${AddonWrapper}:hover & {
    opacity: 1;
  }

  transition: opacity 0.2s linear;
`
export const SwitchBlock = styled.div`
  cursor: pointer;
`
export const ArticleWrapper = styled.div<{ next?: boolean }>`
  ${css.flexColumn('align-start')};
  position: absolute;
  left: -280px;
  top: ${({ next }) => (next ? '22px' : '-18px')};
  width: 280px;
  margin-right: 10px;

  display: none;
  ${SwitchBlock}:hover & {
    display: block;
    cursor: pointer;
  }
`
export const IndexDesc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 13px;
  margin-bottom: 2px;
`
export const ArticleTitle = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 16px;
`
