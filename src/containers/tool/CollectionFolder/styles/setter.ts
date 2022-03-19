import styled from 'styled-components'

import type { TActive } from '@/spec'
import css, { theme } from '@/utils/css'

import { MODAL_MIN_HEIGHT } from './metric'

export const Wrapper = styled.div<TActive>`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  flex-direction: column;

  height: 100%;
  min-height: ${MODAL_MIN_HEIGHT};
`
export const Header = styled.div`
  ${css.flex('align-end')};
  color: ${theme('thread.articleDigest')};
  background: ${theme('modal.bg')};
  padding: 20px;
  padding-top: 15px;
  padding-bottom: 10px;
  font-size: 14px;
  height: 50px;
  width: 100%;
  z-index: 1;

  ${css.media.mobile`
    padding: 0;
    background: transparent;
    margin-top: -15px;
    padding-left: 10px;
  `};
`
export const Artiment = styled.div`
  color: ${theme('thread.articleTitle')};
  ${css.cutRest('200px')};
  font-size: 15px;
  margin-left: 5px;
  margin-right: 5px;
`
export const ListWrapper = styled.div`
  ${css.flex()};
  flex-wrap: wrap;
  flex-grow: 1;
  padding-top: 35px;
  padding-right: 15px;
  padding-left: 0;
  padding-bottom: 0;
  background: ${theme('modal.bg')};
  filter: ${theme('modal.subPanelShadow')};

  ${css.media.mobile`
    padding: 0;
    margin-top: 10px;
    margin-left: -15px;
    background: transparent;
  `};
`
export const FolderWrapper = styled.div`
  margin-left: 20px;
  margin-bottom: 30px;
`
export const Footer = styled.div`
  ${css.flex('justify-start')};
  font-size: 14px;
  color: ${theme('thread.articleDigest')};
  background: ${theme('modal.subPanel')};
  padding: 15px 20px;
`
