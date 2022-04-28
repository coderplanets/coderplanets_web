import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  width: 60px;
  ${css.flexColumn('align-end')};

  ${css.media.mobile`
    width: 0;
  `};
`
export const TopArea = styled.div<{ showShare: boolean }>`
  width: 26px;
  height: ${({ showShare }) => (showShare ? '80px' : '50px')};

  position: absolute;
  top: 0;
  left: 34px;
  display: block;
  background: white;
  border-bottom-left-radius: 16px;
  box-shadow: ${theme('drawer.closerShadow')};
  ${css.flexColumn('align-both')}
  padding-left: 16px;

  &:after {
    // this is for cover the box-shadow
    content: '';
    position: absolute;
    background: white;
    top: 0;
    right: -10px;
    width: 10px;
    height: 100%;
    /* border: 1px solid tomato; */
  }
`
export const MobileCloser = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  ${css.size(30)};
  cursor: pointer;

  &:after {
    content: '^';
    position: absolute;
    font-size: 26px;
    color: ${theme('drawer.font')};
    font-weight: lighter;
  }
`

export const BottomWrapper = styled.div`
  margin-bottom: 30px;
  margin-right: 8px;

  opacity: 0;

  ${Wrapper}:hover & {
    opacity: 1;
  }

  transition: opacity 0.2s linear;
`
