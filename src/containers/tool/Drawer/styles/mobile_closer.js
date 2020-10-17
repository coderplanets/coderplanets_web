import styled from 'styled-components'

// see example: https://codepen.io/mattbraun/pen/EywBJR
// import { css } from '@/utils'

const BaseWrapper = styled.div`
  z-index: 1;
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 100%;
  height: 30px;
  background: #002a35;
  border-bottom: 1px solid;
  border-bottom-color: #144150;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`
export const BottomWrapper = styled(BaseWrapper)`
  top: 10px;
  transform: rotate(180deg);
`
export const TopWrapper = styled(BaseWrapper)`
  bottom: 10px;
`

export const CloseLineWrapper = styled.div`
  position: relative;
  transform: rotate(180deg);
  margin-right: calc(50% - 19px);
  top: 16px;
`

export const LineBase = styled.span`
  position: absolute;
  float: right;
  top: 0;
  background-color: transparent;
  width: 20px;
  display: block;
  border-radius: 5px;

  &:after {
    content: '';
    background-color: #194d5f;
    width: 20px;
    height: 3px;
    display: block;
    float: right;
    border-radius: 5px;
    transition: all 0.5s cubic-bezier(0.25, 1.7, 0.35, 0.8);
    z-index: -1;

    transform-origin: ${({ curve }) => (curve ? 'center center' : '')};
    transform: ${({ curve }) => (curve ? 'rotate(-15deg)' : '')};
  }
`
export const LeftLine = styled(LineBase)`
  left: 0;
  transform: rotate(15deg);
  &:after {
    transform-origin: ${({ curve }) => (curve ? 'center center' : '')};
    transform: ${({ curve }) => (curve ? 'rotate(-15deg)' : '')};
  }
`
export const RightLine = styled(LineBase)`
  left: ${({ curve }) => (!curve ? '18px' : '19px')};
  transform: rotate(-15deg);

  &:after {
    transform-origin: ${({ curve }) => (curve ? 'center center' : '')};
    transform: ${({ curve }) => (curve ? 'rotate(15deg)' : '')};
  }
`
