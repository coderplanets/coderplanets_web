import { css, keyframes } from 'styled-components'

const shake = keyframes`
  from,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
`

const fadeInUp = keyframes`
from {
  opacity: 0;
    transform: translate3d(0, 90%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`
const pulse = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`

const fadeInRight = keyframes`
  from {
    opacity: 0.3;
    transform: translate3d(50%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`
const zoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const shakeRule = css`
  ${shake} 0.3s linear;
`
const zoomInRule = css`
  ${zoomIn} 0.3s linear;
`
const fadeInRightRule = css`
  ${fadeInRight} 0.2s linear;
`
const fadeInUpRule = css`
  ${fadeInUp} 0.5s linear;
`
const pulseRule = css`
  ${pulse} 0.4s linear;
`
const rotate360Rule = css`
  ${rotate360} 1s linear infinite;
`
const rotate360CloseRule = css`
  ${rotate360} 2s cubic-bezier(0, 0.56, 0.24, 0.72);
`

const animate = {
  // fadeInRight,
  fadeInRightRule,
  // pulse,
  pulseRule,
  // fadeInUp,
  fadeInUpRule,
  // shake,
  shakeRule,
  // zoomIn,
  zoomInRule,
  // rotate360,
  rotate360Rule,
  rotate360CloseRule,
}

export default animate
