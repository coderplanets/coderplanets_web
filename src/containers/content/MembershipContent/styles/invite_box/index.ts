import styled from 'styled-components'

import type { TTestable, TActive } from '@/spec'
import { theme, css } from '@/utils'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  color: ${theme('thread.articleDigest')};
  ${css.flexColumn('align-center')};
  width: 100%;
  padding: 20px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 18px;
  margin-bottom: 15px;
`
export const PinCodeWrapper = styled.div`
  ${css.flex('justify-center')};
  width: 100%;

  .a-reactPinField__input {
    background-color: #0b2631;
    border: 1px solid;
    color: #139c9e;
    border-color: #0e77a4;
    border-radius: 0.3rem;
    font-size: 2rem;
    margin: 0.25rem;
    height: 3.5rem;
    outline: none;
    text-align: center;
    transition-duration: 250ms;
    transition-property: background, color, border, box-shadow, transform;
    width: 3rem;
  }

  .a-reactPinField__input:focus {
    border-color: rgb(0, 123, 255);
    outline: none;
  }

  .a-reactPinField__input:invalid {
    animation: shake 3 linear 75ms;
    border-color: rgb(220, 53, 69);
    box-shadow: 0 0 0.25rem rgba(220, 53, 69, 0.5);
  }

  swd-pin-field[completed] .pin-field {
    border-color: rgb(40, 167, 69);
    background-color: rgba(40, 167, 69, 0.25);
  }
`
