import styled from 'styled-components'

// import Img from '@/Img'
import { cs, theme } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
`
export const TableWrapper = styled.div`
  width: 100%;
  border-left: 1px solid;
  border-left-color: ${theme('table.border')};
  border-right: 1px solid;
  border-right-color: ${theme('table.border')};
`
export const TableHeader = styled.div`
  ${cs.flex('align-center', 'justify-between')}
  background: ${theme('table.headerBg')};
  color: ${theme('table.text')};
`
export const HeaderItem = styled.div`
  ${cs.flex('align-center')}
  width: 16%;
  height: 36px;
  padding: 0 10px;
`
export const RowWrapper = styled.div`
  ${cs.flex('align-center', 'justify-between')}
  color: ${theme('table.text')};
  border-bottom: 1px solid;
  border-bottom-color: ${theme('table.border')};
  &:hover {
    background: ${theme('table.hoverBg')};
  }
`
export const CellItem = styled.div`
  ${cs.flex('align-center')}
  width: 16%;
  height: 35px;
  padding: 0 10px;
`
export const ColorCell = styled.div`
  color: ${({ color }) => color || theme('banner.title')};
`
