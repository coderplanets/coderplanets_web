import styled from 'styled-components'

import type { TTestable } from '@/spec'

const color = {
  dark: '#1d667d',
  light: '#004755',
}

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  position: absolute;
  left: -30px;
  top: -108px;
  transform: scale(0.23);
`
export const Balloon = styled.div`
  width: 300px;
  height: 320px;
  background-color: ${color.light};
  border-radius: 50%;
  border: 11px solid ${color.dark};
  /* border-color: ${color.dark} */

  &:before {
    position: absolute;
    content: '';
    width: 220px;
    height: 321px;
    background-color: ${color.dark};
    border-radius: 50%;

    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  &:after {
    position: absolute;
    content: '';
    width: 120px;
    height: 321px;
    background-color: ${color.light};
    border-radius: 50%;
    z-index: 1;

    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`
export const Basket = styled.div`
  position: absolute;
  top: 345px;
  left: 115px;

  width: 65px;
  height: 45px;
  background-color: ${color.light};
  border-radius: 10px;
  border: 9px solid ${color.dark};

  &:after {
    content: '';
    width: 89px;
    height: 15px;
    background-color: ${color.dark};
    border-radius: 5px;

    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    top: -40px;
    left: -20px;
  }
`
