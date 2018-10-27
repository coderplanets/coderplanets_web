import styled from 'styled-components'

// import { Img } from '../../../components'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`
export const TabItem = styled.div`
  padding: 0 5px;
  padding-bottom: 2px;
  font-size: 0.85rem;
  margin-right: 10px;
  display: flex;
  align-items: center;
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
`
