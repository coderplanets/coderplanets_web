import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css from '@/utils/css'

import { getWidth, getHeight } from './metric'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable & { size: string }>`
  position: relative;
  ${css.flexColumn()};
  width: ${({ size }) => getWidth(size)};
  height: ${({ size }) => getHeight(size)};

  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`
export const TabShape = styled.div`
  position: absolute;
  background-color: #054956;
  height: 10px;
  left: 0;
  bottom: 100%;
  display: block;
  width: 40%;
  border-top-left-radius: 8px;
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: calc(100% - 10px);
    border-bottom: 10px solid;
    border-bottom-color: #054956;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }
`
