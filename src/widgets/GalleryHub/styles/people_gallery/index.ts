import styled from 'styled-components'

import css from '@/utils/css'

type TBlock = { borderRight: boolean; borderTop: boolean }
export const Block = styled.div<TBlock>`
  ${css.flexColumn('justify-between')};
  /* width: 25%;
  height: 308px; */
  border: 1px solid;
  border-left: none;
  border-right: ${({ borderRight }) => (borderRight ? '1px solid' : 'none')};
  border-top: ${({ borderTop }) => (borderTop ? '1px solid' : 'none')};
  border-color: #0d4353;
  padding: 15px;
  padding-left: 24px;

  :last-child {
    border-right: none;
  }
  &:hover {
    background: #04313e;
    border-color: #074c61;
  }
  transition: all 0.2s;
`

export const Footer = styled.div`
  ${css.flex('align-center', 'justify-between')};
  &:hover {
    cursor: pointer;
  }
`
