import { keyframes } from 'styled-components'

const animatedBg = keyframes`
  from {
    background-position: 0 0;
  }
/*use negative width if you want it to flow right to left else and positive for left to right*/
  to {
    background-position: -10000px 0;
  }
`

const shake = keyframes`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
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
    transform: scale3d(1.15, 1.15, 1.15);
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
const breath = keyframes`
  0%    {opacity: 0.6;}
  60%   {opacity:   1;}
  100%  {opacity: 0.6;}
`
const blink = keyframes`
  50%    {opacity: 0}
  100%  {opacity: 1;}
`

const jump = keyframes`
  0% {
    transform: translate3d(0px, 0px, 0);
  }
  50% {
    transform: translate3d(0px, -10px, 0);
  }
  100% {
    transform: translate3d(0px, 0px, 0);
  }
`

const animate = {
  fadeInRight,
  pulse,
  fadeInUp,
  shake,
  zoomIn,
  rotate360,
  breath,
  blink,
  jump,
  animatedBg,
}

export default animate
