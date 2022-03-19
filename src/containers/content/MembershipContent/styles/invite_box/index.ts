import styled from 'styled-components'

import Img from '@/Img'
import type { TTestable } from '@/spec'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  color: ${theme('thread.articleDigest')};
  ${css.flexColumn('align-center')};
  width: 100%;
`
export const Header = styled.div`
  ${css.flex('align-center')};
  filter: ${theme('modal.subPanelShadow')};
  margin-bottom: 15px;
  padding-top: 12px;
`
export const Content = styled.div`
  background: ${theme('modal.subPanel')};
  padding-top: 20px;
`
export const HandIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  ${css.size(20)};
  margin-left: -10px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 18px;
  margin-left: 8px;
`
export const PinCodeWrapper = styled.div`
  ${css.flex('justify-center')};
  width: 100%;

  .a-reactPinField__input {
    background-color: #0b2631;
    border: 1px solid;
    color: #139c9e;
    border-color: #0d5a7b;
    border-radius: 6px;
    font-size: 25px;
    margin: 0.25rem;
    height: 3.5rem;
    outline: none;
    text-align: center;
    transition-duration: 250ms;
    transition-property: background, color, border, box-shadow, transform;
    width: 3rem;
  }

  .a-reactPinField__input:focus {
    border-color: #107eae;
    outline: none;
  }

  .a-reactPinField__input:invalid {
    animation: shake 3 linear 75ms;
    border-color: tomato;
    box-shadow: 0 0 0.25rem rgba(220, 53, 69, 0.5);
  }

  .a-reactPinField__input .-success {
    border-color: rgb(40, 167, 69);
    background-color: rgba(40, 167, 69, 0.25);
  }
  /* swd-pin-field[completed] .pin-field {
    border-color: rgb(40, 167, 69);
    background-color: rgba(40, 167, 69, 0.25);
  } */
`
