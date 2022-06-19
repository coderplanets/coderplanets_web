import styled from 'styled-components'

import type { TTestable } from '@/spec'

// import Img from '@/Img'
import { theme } from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  position: relative;
  margin: 40px auto;
  padding: 20px;
  padding-top: 40px;
  width: 320px; // 360px;
  height: 680px; // 780px;
  border-radius: 40px;
  box-shadow: 0px 0px 0px 11px ${theme('border')},
    0px 0px 0px 12px ${theme('border')}, 0px 0px 0px 6px ${theme('border')};

  &:before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    //

    top: 0px;
    width: 54%;
    height: 25px;
    background-color: ${theme('border')};
    border-radius: 0px 0px 40px 40px;
  }

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    //
    bottom: 7px;
    width: 140px;
    height: 4px;
    background-color: #f2f2f2;
    border-radius: 10px;
  }
`

export const Content = styled.div``
