import styled from 'styled-components'

import type { TActive } from '@/spec'
import { TYPE } from '@/constant'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

import Img from '@/Img'

export const Wrapper = styled.div`
  width: 60px;
  ${css.flexColumn('align-end')};

  ${css.media.mobile`
    width: 0;
  `};
`
export const CloseWrapper = styled.div<{ type: string }>`
  width: 26px;
  height: 80px;
  position: absolute;
  top: 0;
  left: 34px;
  display: ${({ type }) =>
    type === TYPE.DRAWER.ACCOUNT_EDIT ? 'none' : 'block'};
  background: #002a34;
  border-bottom-left-radius: 15px;
  box-shadow: ${theme('drawer.shadow')};
  ${css.flexColumn('align-both')}
  padding-left: 16px;
`
export const MobileCloser = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  ${css.size(30)};
  cursor: pointer;

  &:after {
    content: '^';
    position: absolute;
    font-size: 26px;
    color: ${theme('drawer.font')};
    font-weight: lighter;
  }
`
export const SwitchArticleWrapper = styled.div<TActive>`
  ${css.flexColumn('justify-evenly', 'align-center')};
  opacity: ${({ show }) => (show ? 1 : 0)};
  position: relative;

  color: ${theme('drawer.font')};
  width: 35px;
  height: 70px;
  margin-right: 6px;
  margin-top: 44vh;

  opacity: 0;

  ${Wrapper}:hover & {
    opacity: 1;
  }

  transition: opacity 0.2s linear;
`
export const SwitchBlock = styled.div``
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
export const GotoTopWrapper = styled.div`
  margin-bottom: 30px;
  margin-right: 8px;

  opacity: 0;

  ${Wrapper}:hover & {
    opacity: 1;
  }

  transition: opacity 0.2s linear;
`
