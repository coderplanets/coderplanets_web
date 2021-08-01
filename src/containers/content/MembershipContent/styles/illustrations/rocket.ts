import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css from '@/utils/css'

import Img from '@/Img'

import {
  Star1 as Star1Base,
  Star2 as Star2Base,
  Star3 as Star3Base,
} from './index'

const color = {
  wing: '#004756',
  window: '#004756',
  body: '#00667D',
  bodyTop: '#329ec0',
  beam: '#00CAF6',
  pink: '#b77083',
}

const height = '140px'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  position: relative;
  margin-bottom: 15px;
  transform: scale(0.52);
`

export const Star1 = styled(Star1Base)``
export const Star2 = styled(Star2Base)``
export const Star3 = styled(Star3Base)``
export const RocketBody = styled.div<{ pink: boolean }>`
  width: 80px;

  &:before {
    content: '';
    position: absolute;
    left: calc(50% - 24px);
    width: 48px;
    height: 50px;
    background-color: ${({ pink }) => (pink ? color.pink : color.beam)};

    bottom: -16px;
    border-radius: 30% 70% 48% 52% / 2% 0% 100% 98%;
  }
`
export const Body = styled.div<{ pink: boolean }>`
  position: relative;
  background-color: ${color.body};
  height: ${height};
  left: calc(50% - 42px);
  border-top-right-radius: 100%;
  border-top-left-radius: 100%;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-top: 5px solid;
  border-top-color: ${({ pink }) => (pink ? color.pink : color.bodyTop)};
  z-index: 2;
`
export const Window = styled.div`
  position: absolute;
  ${css.size(40)};
  border-radius: 100%;
  background-color: ${color.window};
  left: calc(50% - 22px);
  top: 40px;
  z-index: 3;
`
export const GirlMarkWrapper = styled.div`
  ${css.flex('align-both')};
  position: absolute;
  background: ${color.window};
  border-radius: 50%;
  top: 40px;
  left: 14px;
  width: 48px;
  height: 48px;
  z-index: 3;
`
export const GirlIcon = styled(Img)`
  fill: ${color.pink};
  ${css.size(30)};
  transform: rotate(20deg);
`
const Wing = styled.div`
  position: absolute;
  z-index: 1;
  height: 55px;
  width: 50px;
  background-color: ${color.wing};
`
export const WingLeft = styled(Wing)`
  left: -30px;
  top: calc(100% - 55px);
  border-top-left-radius: 80%;
  border-bottom-left-radius: 20%;
`
export const WingRight = styled(Wing)`
  right: -30px;
  top: calc(100% - 55px);
  border-top-right-radius: 80%;
  border-bottom-right-radius: 20%;
`
