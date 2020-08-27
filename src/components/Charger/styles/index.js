import styled, { css, keyframes } from 'styled-components'

import Img from '@/Img'
import { theme } from '@/utils'

const DURATION = '2.5s'
const load = keyframes`
  0% {
    top: 24px;
  }
  70% {
    top: 10px;
  }
  90% {
    top: 0;
  }
  95% {
    top: 0;
  }
  100% {
    top: 24px;
  }
`
const liquid1 = keyframes`
  0% {
    height: 0;
    opacity: 0;
    top: -5px;
  }
  22% {
    height: 2.8125px;
    top: 3.75px;
    opacity: 1;
  }
  25% {
    top: -2.5px;
  }
  35% {
    height: 11.25px;
    top: -5px;
  }
  55% {
    height: 3px;
    top: -1.25px;
  }
  60% {
    height: 6px;
    opacity: 1;
    top: -3px;
  }
  96% {
    height: 8.4375px;
    opacity: 0;
    top: 5px;
  }
  100% {
    height: 0;
    opacity: 0;
  }
`
const liquid2 = keyframes`
  0% {
    height: 0;
    opacity: 0;
    top: -0.5rem;
  }
  17.5% {
    height: 3px;
    top: 2px;
    opacity: 1;
  }
  20% {
    top: -2.5px;
  }
  25% {
    height: 15px;
    top: -6px;
  }
  45% {
    height: 3px;
    top: -1px;
  }
  60% {
    opacity: 1;
    height: 15px;
    top: -5px;
  }
  96% {
    opacity: 0;
    height: 8px;
    top: 5px;
  }
  100% {
    height: 0;
    opacity: 0;
  }
`
const loadRule = css`
  ${load} ${DURATION} infinite;
`
const liquid1Rule = css`
  ${liquid1} ${DURATION} infinite;
`
const liquid2Rule = css`
  ${liquid2} ${DURATION} infinite;
`

export const Wrapper = styled.div.attrs((props) => ({
  'data-testid': props.testId,
}))`
  text-align: center;
  position: relative;
  height: 28px;
  margin-bottom: 6px;
  cursor: pointer;
`
export const Battery = styled.div`
  display: inline-block;
  position: relative;
  width: 16px;
  height: 26px;
  box-shadow: 0 0 0 2px #155e76;
  border-radius: 2px;

  &:before {
    content: '';
    position: absolute;
    left: 5px;
    top: -4px;
    height: 3px;
    width: 6px;
    background: #155e76;
    border-radius: 2px;
  }

  ${Wrapper}:hover & {
    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-right: 16px solid transparent;
      border-bottom: 22px solid rgba(255, 255, 255, 0.25);
    }
  }
`
export const Liquid = styled.div`
  position: absolute;
  top: 23px;
  bottom: 0;
  left: 0;
  right: 0;
  width: 16px;
  background: ${theme('baseColor.green')};

  ${Wrapper}:hover & {
    top: 0;
    animation: ${loadRule};

    &:before {
      left: 0;
      animation: ${liquid2Rule};

      content: '';
      position: absolute;
      top: -5px;
      height: 11.25px;
      width: 14.625px;
      background: ${theme('baseColor.green')};
      border-radius: 50%;
      opacity: 0;
    }

    &:after {
      right: 0;
      animation: ${liquid1Rule};

      content: '';
      position: absolute;
      top: -5px;
      height: 11.25px;
      width: 14.625px;
      background: ${theme('baseColor.green')};
      border-radius: 50%;
      opacity: 0;
    }
  }
`
export const MoneySign = styled(Img)`
  position: absolute;
  display: block;
  top: 6px;
  left: 3px;
  fill: #327faf;
  width: 10px;
  height: 10px;
  transition: opacity 0.25s;

  ${Wrapper}:hover & {
    fill: #ecbcb3;
    top: 8px;
    left: 2px;
    width: 12px;
    height: 12px;
  }

  transition: all 0.25s;
`
