import styled from 'styled-components'

import type { TActive } from '@/spec'
import css, { theme } from '@/utils/css'
import ArrowSVG from '@/icons/ArrowSimple'

import { Wrapper as AddonWrapper } from './index'

export const Wrapper = styled.div<TActive>`
  ${css.flexColumn('justify-evenly', 'align-center')};
  position: relative;
  left: 85px;
  z-index: 1;
  top: 45vh;

  color: ${theme('drawer.font')};
  width: 35px;
  height: 70px;

  opacity: 1;

  ${AddonWrapper}:hover & {
    opacity: 1;
  }

  transition: opacity 0.2s linear;
`
const SwitchBlock = styled.div`
  cursor: pointer;
  position: absolute;
  ${css.circle(50)};
  ${css.flex('align-both')};
  opacity: 0.4;

  &:hover {
    background: ${theme('hoverBg')};
    opacity: 1;
    cursor: pointer;
  }

  transition: opacity 0.3s;
`
export const LeftSwitchBlock = styled(SwitchBlock)`
  left: -4px;
`
export const LeftArrow = styled(ArrowSVG)`
  ${css.size(28)};
  fill: ${theme('thread.extraInfo')};
`
export const RightSwitchBlock = styled(SwitchBlock)`
  left: 780px;

  ${css.media.laptopL`
    left: 55vw;
  `};
`
export const RightArrow = styled(LeftArrow)`
  transform: rotate(180deg);
`
export const IndexWrapper = styled.div`
  position: absolute;
  width: 100px;
  color: ${theme('thread.extraInfo')};
  font-size: 12px;

  opacity: 0;

  ${SwitchBlock}:hover & {
    opacity: 1;
    cursor: pointer;
  }

  transition: opacity 0.2s;
  transition-delay: 0.3s;
`
export const LeftIndexWrapper = styled(IndexWrapper)`
  position: absolute;
  left: 32px;
  top: 38px;
`
export const RightIndexWrapper = styled(IndexWrapper)`
  position: absolute;
  left: 31px;
  top: 38px;
`
