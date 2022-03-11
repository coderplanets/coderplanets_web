import styled from 'styled-components'

import type { TActive } from '@/spec'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  height: 100%;
`
export const OptionsWrapper = styled.div`
  padding: 0 35px;
  padding-right: 20px;
  background: ${theme('modal.bg')};
  filter: ${theme('modal.subPanelShadow')};

  ${css.media.mobile`
    background: transparent;
    padding: 0;
  `};
`
export const FooterPanel = styled.div`
  ${css.flex('align-center')};
  padding-left: 35px;
  width: 100%;
  background: ${theme('modal.subPanel')};
  /* background: ${theme('modal.panelBg')}; */
  height: 56px;
  color: ${theme('thread.articleDigest')};
  font-size: 13px;

  ${css.media.mobile`
    background: transparent;
    margin-bottom: 40px;
    padding: 0;
  `};
`
export const Option = styled.div`
  ${css.flex('align-center')};
  font-size: 16px;
  padding: 12px 0;
  border-bottom: 1px solid;
  border-bottom-color: #114b5f;

  :last-child {
    border-bottom: none;
  }
`
export const SelectWrapper = styled.div`
  ${css.flex('align-center')};
`
export const Title = styled.div<TActive>`
  color: ${theme('thread.articleTitle')};
  margin-left: 5px;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  opacity: ${({ active }) => (active ? 1 : 0.9)};

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`
