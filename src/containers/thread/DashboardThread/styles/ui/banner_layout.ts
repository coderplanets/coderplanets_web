import styled from 'styled-components'

import type { TActive } from '@/spec'

import css, { theme } from '@/utils/css'

import { Divider } from '@/widgets/Common'
import { BaseSection, BlockBase } from '.'

export { Bar, Circle } from '.'

export const Wrapper = styled(BaseSection)``
export const SelectWrapper = styled.div`
  ${css.flex('align-center')};
  width: 100%;
`
export const Main = styled.div`
  ${css.flex()};
  width: 100%%;
`
export const ListsWrapper = styled.div`
  border-right: 1px solid;
  border-right-color: ${theme('border')};
  width: 85%;
`
export const TagssWrapper = styled.div`
  width: 15%;
  margin-left: 20px;
`
export const ExampleBtn = styled.div`
  display: inline-block;
`
export const Layout = styled.div`
  ${css.flexColumn('align-both')};
`
export const LayoutTitle = styled.div<TActive>`
  opacity: ${({ $active }) => ($active ? 1 : 0.65)};

  ${Layout}:hover & {
    opacity: 1;
    cursor: pointer;
  }
  transition: all 0.2s;
`
export const Block = styled(BlockBase)`
  width: 300px;
  height: 200px;
  padding: 12px 25px;
`
export const DividerLine = styled(Divider)`
  opacity: 0.8;
`
