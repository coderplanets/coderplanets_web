import styled from 'styled-components'

import { theme, cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};
`

export const TabItem = styled.div`
  ${cs.flex('align-center')};
  width: 70px;
  padding: 0 5px;
  padding-bottom: 2px;
  font-size: 0.85rem;
  margin-right: 10px;
  border-bottom: 1px dashed;

  color: ${({ active }) =>
    active ? theme('tabs.headerActive') : theme('tabs.header')};
  border-bottom-color: ${({ active }) =>
    active ? theme('tabs.headerActive') : theme('banner.bg')};

  &:hover {
    color: ${theme('tabs.headerActive')};
    cursor: pointer;
  }
  transition: 0.2s color;

  ${cs.media.mobile`
    width: 80px;
    margin-right: 0;
    padding: 0;
    display: flex;
    justify-content: center;
  `};
`
