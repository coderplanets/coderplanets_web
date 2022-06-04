import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import { BaseSection } from '.'

export const Wrapper = styled.div`
  ${css.flexColumn()};
`
export const Section = styled(BaseSection)``
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  margin-bottom: 20px;
`
export const SelectWrapper = styled.div`
  ${css.flex('align-center')};
  width: 100%;
`
export const Row = styled.div`
  ${css.flex('align-center')};
`

export const ExampleBtn = styled.div`
  margin-bottom: 15px;
  margin-right: 10px;
  opacity: 0;
  ${Section}:hover & {
    opacity: 1;
  }
  transition: all 0.2s;
`
type TColumn = { center?: boolean; grow?: boolean }
export const Column = styled.div<TColumn>`
  ${css.flexColumn()};
  ${({ center }) => (center ? 'align-items: center;' : '')};
  ${({ grow }) => (grow ? 'flex-grow: 1;' : '')};
`
