import styled from 'styled-components'

import type { TTestable, TActive } from '@/spec'

// import Img from '@/Img'
import HookSVG from '@/icons/Hook'
import css from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flex('align-center')};
  padding: 5px;
`
export const DotWrapper = styled.div`
  ${css.circle(28)};
  ${css.flex('align-both')};
`
type TDot = TActive & { color: string }
export const Dot = styled.div<TDot>`
  ${({ $active }) => ($active ? css.circle(20) : css.circle(16))};
  ${css.flex('align-both')};
  background-color: ${({ color }) => color};
  box-shadow: ${({ $active }) =>
    $active ? '0px 0px 7px 0px rgb(151 151 151 / 30%)' : ''};

  &:hover {
    ${css.circle(20)};
    ${css.flex('align-both')};
    cursor: pointer;
  }

  transition: all 0.2s;
`
export const HookIcon = styled(HookSVG)`
  ${css.size(10)};
  fill: white;
`
