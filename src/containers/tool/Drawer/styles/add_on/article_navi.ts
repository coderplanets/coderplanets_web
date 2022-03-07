import styled from 'styled-components'

import type { TActive } from '@/spec'
import { theme } from '@/utils/themes'
import css from '@/utils/css'
// import ArrowSVG from '@/icons/ArrowSimple'

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
  /* background: #f5f5f5; */
  &:hover {
    background: #f5f5f5;
    opacity: 1;
    cursor: pointer;
  }
`
export const LeftSwitchBlock = styled(SwitchBlock)`
  left: 0;
`
export const RightSwitchBlock = styled(SwitchBlock)`
  left: 750px;
`
export const IndexWrapper = styled.div`
  position: absolute;
  width: 100px;
  color: ${theme('thread.articleDigest')};

  opacity: 0;
  ${SwitchBlock}:hover & {
    opacity: 1;
    cursor: pointer;
  }

  transition: opacity 0.2s;
`
export const LeftIndexWrapper = styled(IndexWrapper)`
  position: absolute;
  left: 27px;
  top: 30px;
`
export const RightIndexWrapper = styled(IndexWrapper)`
  position: absolute;
  left: 27px;
  top: 30px;
`
export const IndexDesc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 13px;
  margin-bottom: 2px;
`
