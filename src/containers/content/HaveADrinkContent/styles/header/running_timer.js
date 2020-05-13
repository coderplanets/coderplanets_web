import styled, { css, keyframes } from 'styled-components'

// import { cs, theme } from '@/utils'
// see example: https://codepen.io/HugoGiraudel/pen/BHEwo

const rota = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
const opa = keyframes`
  0% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0;
  }
`

const getRotaAnimation = interval => css`
  ${rota} ${interval} linear infinite;
`
const getOpaAnimation = (interval, reverse = false) => {
  return reverse
    ? css`
        ${opa} ${interval} steps(1, end) infinite reverse;
      `
    : css`
        ${opa} ${interval} steps(1, end) infinite;
      `
}

const contentBg = '#04313e'
const clockBorder = '#62777C' // '#0d475a'
const clockBg = '#0d475a'

const clickSize = '16px'

export const Wrapper = styled.div`
  position: relative;
  width: ${clickSize};
  height: ${clickSize};
  background: ${contentBg};
  margin-right: 5px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${clickSize};
    height: ${clickSize};
    border-radius: 100%;
    border: 1px solid;
    border-color: ${clockBorder};
    z-index: 400;
  }
`
const Handler = styled.div`
  position: absolute;
  top: -2px;
  left: 5px;
  width: 6px;
  height: 1px;
  background: ${clockBorder};

  &:after {
    position: absolute;
    content: '';
    top: 1px;
    left: 2px;
    width: 2px;
    height: 3px;
    background: ${clockBorder};
  }
`
export const TopHandlerBar = styled(Handler)``
export const PieSpinner = styled.div`
  width: 50%;
  height: 100%;
  transform-origin: 100% 50%;
  position: absolute;
  background: ${clockBg};
  border: 2px solid;
  border-color: ${clockBorder};
  ${Wrapper}:hover & {
    animation-play-state: running;
  }

  /* diff */
  border-radius: 100% 0 0 100% / 50% 0 0 50%;
  z-index: 200;
  border-right: none;
  animation: ${({ interval }) => getRotaAnimation(interval)};
`

export const PieFiller = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  transform-origin: 100% 50%;
  background: ${clockBg};
  border: 2px solid;
  border-color: ${clockBorder};
  ${Wrapper}:hover & {
    animation-play-state: running;
  }

  /* diff */
  border-radius: 0 100% 100% 0 / 0 50% 50% 0;
  left: 50%;
  opacity: 0;
  z-index: 100;
  animation: ${({ interval }) => getOpaAnimation(interval, true)};
  border-left: none;
`
export const Mask = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  background: inherit;
  opacity: 1;
  z-index: 300;
  animation: ${({ interval }) => getOpaAnimation(interval)};

  ${Wrapper}:hover & {
    animation-play-state: running;
  }
`
