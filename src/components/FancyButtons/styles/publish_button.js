import styled from 'styled-components'

import Img from '@Img'
import { cs, theme } from '@utils'

// see example: https://codepen.io/mydearxym2/pen/qBEvvpo

const commonHoverAffix = `
  content: '';
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  height: 100%;
  transition: 0.25s linear;
  z-index: 1;
`

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 32px;
  background-color: #3680ad; /* 消失的时候背景色 */
  border-radius: 3px;
  /* 
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  */
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;

  &:hover {
    background-color: #22637e; /* #46627f; */
    /*
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
     */
  }

  &:hover span {
    opacity: 0;
    z-index: -3;
  }
  &:hover:before {
    opacity: 0.5;
    transform: translateY(-100%);
  }
  &:hover:after {
    opacity: 0.5;
    transform: translateY(100%);
  }

  &:before {
    ${commonHoverAffix};
    width: 70%;

    left: 0;
    justify-content: flex-end;
    background-color: #3e8ebf;
  }

  &:after {
    ${commonHoverAffix};
    width: 30%;

    right: 0;
    justify-content: flex-start;
    background-color: #327faf;
  }
`
export const Label = styled.span`
  ${cs.flex('align-center')};
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${theme('button.fg')};
  font-family: 'Fira Mono', monospace;
  font-size: 14px;
  letter-spacing: 4px;
  opacity: 1;
  transition: opacity 0.25s;
  z-index: 2;
`
export const LabelIcon = styled(Img)`
  fill: ${theme('button.fg')};
  width: 14px;
  height: 14px;
  display: block;
`
export const ActionLink = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 100%;
  color: whitesmoke;
  font-size: 24px;
  text-decoration: none;
  transition: 0.25s;

  &:hover {
    background: #18587a;
  }
`
export const Icon = styled(Img)`
  fill: ${theme('button.fg')};
  width: 16px;
  height: 16px;
  display: block;

  ${ActionLink}:hover & {
    fill: ${theme('button.hoverBg')};
    cursor: pointer;
    width: 18px;
    height: 18px;
  }
  transition: all 0.25s;
`
