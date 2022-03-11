import styled from 'styled-components'

import type { TTestable, TActive } from '@/spec'
import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable & TActive>`
  position: relative;
  max-height: ${({ active }) => (active ? '220px' : '0')};
  height: 220px;
  margin-top: ${({ active }) => (active ? '16px' : '0')};
  margin-bottom: ${({ active }) => (active ? '18px' : '0')};
  padding: ${({ active }) => (active ? '15px' : '0')};

  background: #0d2c38;
  border-left: 2px solid;
  border-right: 2px solid;
  border-left-color: ${theme('content.bg')};
  border-right-color: ${theme('content.bg')};

  margin-left: -25px;
  /* conent padding-left(25px) + padding-right(24px) */
  width: calc(100% + 49px);
  border-radius: 3px;

  transition: max-height 0.2s;
`
export const ArrowIcon = styled(Img)`
  fill: #0d2c38;
  position: absolute;
  top: -14px;
  right: 45px;
  height: 18px;
  width: 18px;
  transform: rotate(-90deg);
`
export const ContentWrapper = styled.div<TActive>`
  ${css.flex('align-center', 'justify-start')};
  display: ${({ active }) => (active ? 'flex' : 'none')};
  height: 100%;
  background: ;
`
// export const GroupWrapper = styled.div`
//   width: 280px;
//   height: 180px;
//   background: #0e303c;
//   border-radius: 5px;
//   padding: 10px;
//   margin-right: 14px;
//   border: 1px solid #0f4556;
// `
