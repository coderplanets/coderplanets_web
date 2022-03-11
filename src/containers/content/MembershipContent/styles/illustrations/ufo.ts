import styled, { css as styledCss } from 'styled-components'

import type { TTestable, TActive } from '@/spec'
import css, { animate } from '@/utils/css'

import {
  Star1 as Star1Base,
  Star2 as Star2Base,
  Star3 as Star3Base,
} from './index'

const color = {
  body: '#016680',
  bodyBottom: '#0f4b5a',
  roof: '#004758',
  roofLight: '#408298',
  beam: '#00CAF9',
}

const height = '140px'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  width: 200px;
  height: ${height};
  position: relative;
`
export const Star1 = styled(Star1Base)`
  ${css.size(14, false)};
  left: 20px;
  top: 30px;
  opacity: 0.8;
`
export const Star2 = styled(Star2Base)`
  width: 12px;
  left: 50px;
  top: 50px;
  opacity: 0.6;
`
export const Star3 = styled(Star3Base)`
  right: 20px;
  width: 10px;
`

export const Star4 = styled(Star3Base)`
  right: 40px;
  width: 10px;
  top: 20px;
`

export const Light = styled.div<TActive>`
  height: 45%;
  width: 2px;
  background: ${color.body};
  clip-path: circle(50% at 50% 100%);
  position: absolute;
  top: 15%;
  left: 50%;
  z-index: 3;
  transform: translate(-50%, -50%);

  &:before {
    position: absolute;
    content: '';
    top: 65%;
    height: 8%;
    width: 250%;
    border-radius: 100%;
    background: ${color.beam};

    animation: ${({ active }) =>
      active ? styledCss`${animate.breath} 1s linear infinite` : 'none'};

    transform: translate(-30%, 0);
  }
`
export const Roof = styled.div`
  height: 25%;
  width: 25%;
  background: ${color.roof};
  clip-path: circle(50% at 50% 100%);
  position: absolute;
  top: 40%;
  left: 50%;
  z-index: 3;
  transform: translate(-50%, -50%);

  &:before {
    position: absolute;
    content: '';
    height: 15%;
    width: 4%;
    right: 30%;
    top: 55%;
    background: ${color.roofLight};
    transform: rotate(-30deg);
    border-radius: 50%;
  }
`
export const Body = styled.div`
  height: 50%;
  width: 50%;
  background: ${color.body};
  clip-path: ellipse(50% 13% at 50% 50%);
  position: absolute;
  top: 55%;
  z-index: 2;
  left: 50%;
  transform: translate(-50%, -50%);
`
const UndercarriageBase = styled.div`
  height: 15%;
  width: 40%;
  background: ${color.bodyBottom};
  top: 58%;
  z-index: 1;
`
export const Undercarriage = styled(UndercarriageBase)`
  position: absolute;
  clip-path: ellipse(50% 50% at 50% 50%);
  left: 50%;
  transform: translate(-50%, -50%);
`
export const Beam = styled.div`
  position: absolute;
  clip-path: ellipse(50% 50% at 50% 50%);
  left: 50%;
  transform: translate(-50%, -50%);

  height: 7%;
  width: 10%;
  background: ${color.beam};
  top: 65%;
`
