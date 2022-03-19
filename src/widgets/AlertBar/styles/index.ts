import styled from 'styled-components'

import type { TTestable } from '@/spec'
// import Img from '@/Img'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
  padding: 8px 15px;
  border-radius: 4px;

  /* warning */
  color: #c3ae8e;
  border-color: #ffe58f;
  background: #fffbe6;
  border-left: none;
  border-right: none;
  border-radius: 0;
`
export const Title = styled.div``
