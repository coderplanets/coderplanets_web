import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css, { theme } from '@/utils/css'

type TWrapper = TTestable | { color?: string }
export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TWrapper>`
  ${css.flexColumn()};
  background: transparent;
  width: 33%;
  min-height: 80px;
  padding: 15px 20px;
  padding-left: 2px;
  margin-bottom: 20px;
  /* border-radius: 10px; */
  /* margin-bottom: 10px; */
  /* border-left: 2px solid; */
  /* border-left-color: #666666; */

  /* &:hover {
    background: #fafafb;
    border-left: 5px solid;
    border-left-color: ${({ color }) =>
    theme(`baseColor.${color.toLowerCase()}`)};
    cursor: pointer;
  } */

  transition: all 0.2s;
`
export const Title = styled.div<{ color: string }>`
  color: ${({ color }) => theme(`baseColor.${color.toLowerCase()}`)};
  filter: saturate(0);

  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;

  ${Wrapper}:hover & {
    filter: saturate(1);
  }

  transition: all 0.2s;
`
export const Item = styled.div<{ color: string }>`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  margin-bottom: 4px;

  &:hover {
    color: ${theme('thread.articleTitle')};
    cursor: pointer;
  }

  /* &:hover {
    color: ${({ color }) => theme(`baseColor.${color.toLowerCase()}`)};
  } */

  transition: all 0.2s;
`
