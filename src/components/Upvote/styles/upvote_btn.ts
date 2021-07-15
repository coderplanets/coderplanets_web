import styled, { keyframes } from 'styled-components'

import type { TActive } from '@/spec'

import Img from '@/Img'
import { css, theme } from '@/utils'

const topBubbles = keyframes`
  0% {
    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;
  }
  50% {
    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%;
  }
  100% {
    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
`

const bottomBubbles = keyframes`
  0% {
    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;
  }
  50% {
    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%;
  }
  100% {
    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }

`
type TWrapper = {
  showAnimation: boolean
}

export const Wrapper = styled.div<TWrapper>`
  display: inline-block;
  color: ${theme('thread.articleTitle')};
  font-size: 15px;
  padding: 5px 0;
  appearance: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  transition: transform ease-in 0.1s;

  &:hover {
    will-change: transform;
  }

  &:focus {
    outline: 0;
  }

  &:before {
    position: absolute;
    content: '';
    width: 250%;
    height: 120%;
    left: -30%;
    z-index: -1;
    transition: all ease-in-out 0.5s;
    background-repeat: no-repeat;
    /** base end */

    display: ${({ showAnimation }) => (showAnimation ? 'block' : 'none')};

    top: -75%;
    background-image: radial-gradient(
        circle,
        ${theme('button.primary')} 20%,
        transparent 20%
      ),
      radial-gradient(
        circle,
        transparent 20%,
        ${theme('button.primary')} 20%,
        transparent 30%
      ),
      radial-gradient(circle, ${theme('button.primary')} 20%, transparent 20%),
      radial-gradient(circle, ${theme('button.primary')} 20%, transparent 20%),
      radial-gradient(
        circle,
        transparent 10%,
        ${theme('button.primary')} 15%,
        transparent 20%
      ),
      radial-gradient(circle, ${theme('button.primary')} 20%, transparent 20%),
      radial-gradient(circle, ${theme('button.primary')} 20%, transparent 20%),
      radial-gradient(circle, ${theme('button.primary')} 20%, transparent 20%),
      radial-gradient(circle, ${theme('button.primary')} 20%, transparent 20%);
    background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%,
      15% 15%, 10% 10%, 18% 18%;

    animation: ${topBubbles} ease-in-out 1s infinite;
  }

  &:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 120%;
    left: -65%;
    z-index: -1;
    transition: all ease-in-out 0.5s;
    background-repeat: no-repeat;
    /** base end */

    display: ${({ showAnimation }) => (showAnimation ? 'block' : 'none')};
    bottom: -60%;
    background-image: radial-gradient(
        circle,
        ${theme('button.primary')} 20%,
        transparent 20%
      ),
      radial-gradient(circle, ${theme('button.primary')} 20%, transparent 20%),
      radial-gradient(
        circle,
        transparent 10%,
        ${theme('button.primary')} 15%,
        transparent 20%
      ),
      radial-gradient(circle, ${theme('button.primary')} 20%, transparent 20%),
      radial-gradient(circle, ${theme('button.primary')} 20%, transparent 20%);
    background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%,
      20% 20%;

    animation: ${bottomBubbles} ease-in-out 1s infinite;
    transform: rotate(200deg);
  }
`

export const ContentWrapper = styled.div`
  ${css.flex('align-center')};
`
export const IconWrapper = styled.div`
  ${css.flex('align-center', 'justify-start')};
  width: 20px;
  margin-right: 5px;
  position: relative;
  z-index: 1;
`
export const IconShadow = styled.div`
  position: absolute;
  left: -3px;
  top: -2px;
  ${css.circle(23)};
  background: #0f4052;
  z-index: -1;
  opacity: 0;

  ${IconWrapper}:hover & {
    opacity: 1;
  }

  transform: opacity 0.2s;
`

export const UpIcon = styled(Img)<TActive>`
  fill: ${({ $active }) =>
    $active ? '#139B9D;' : theme('thread.articleDigest')};
  ${css.size(17)};
  margin-top: 1px;
  &:hover {
    fill: #139b9d;
    cursor: pointer;
  }

  ${IconWrapper}:hover & {
    fill: #139b9d;
    cursor: pointer;
  }

  transition: all 0.2s;
`
