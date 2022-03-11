import styled from 'styled-components'

import { animate } from '@/utils/css'
// import Img from '@/Img'
// import PromptIcon from '@/widgets/PromptIcon'

// see prototype in https://codepen.io/wwwebneko/pen/EyVbNe?__cf_chl_jschl_tk__=ea42fea4f3c12831123e6fa4871dc371d884b80f-1605582431-0-AaCbC_IecQcmQJpGB6rg-2q9uxuSjlmFbcwTbWrygu5jSC4fR6LX5l9MIHgbof5AmzFauO0FLQ-L1S9PZh6cdIEobYpUeQvMiWSXIuSZCAfF6BNN08alDBF-232m6NnwzRfU1nF3s8xRfJa0e5e0X8PKBdyDtttVkr8HC1XwZejcBIGKqT7-RoK_PWgLxNGbwAbIeCrgi3xU72sZ3ArdGEaq55Pgk6IAstRXuqm-4gY8eQNa1VAsH7GPsuWgoP5ooQRAaBPyDMaEPDcoLZMNqe7PePPNx9E-N4F_gTA7ERZFLLZEHk32dH-QCkPO4Dy-ewLmmRz4tGpSZYxYZW9b87JVGRL10Lk3R8H4QOsx3b3UcllTeXWtLX5ojMwWwqtdmRDCN2g6gB5-m5ic445Gkwg

export const Wrapper = styled.div<{ scale: number }>`
  position: relative;
  width: 125px;
  height: 125px;
  margin: auto;
  border-radius: 50%;

  box-shadow: inset 0 -5px 10px rgba(22, 48, 64, 0.5),
    0 0 1.5rem rgba(170, 194, 194, 0.3);
  background-image: linear-gradient(to top left, #24b88b 20%, #21776f);

  transform: ${({ scale }) => `scale(${scale})`};

  &:before {
    content: '';
    display: block;
    position: absolute;
    border-radius: 50%;
    box-shadow: 0 0.1rem 0.1rem rgba(170, 194, 194, 0.1),
      inset 0 -0.1rem 0.1rem rgba(170, 194, 194, 0.1);
    animation: ${animate.rotate360} 5s linear infinite;

    top: -1.75rem;
    left: -1.75rem;
    width: 10rem;
    height: 10rem;
    animation-delay: 1s;
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    border-radius: 50%;
    box-shadow: 0 0.1rem 0.1rem rgba(170, 194, 194, 0.1),
      inset 0 -0.1rem 0.1rem rgba(170, 194, 194, 0.1);
    animation: ${animate.rotate360} 5s linear infinite;

    top: -2.5rem;
    left: -2.5rem;
    width: 13rem;
    height: 13rem;
  }
`
export const Planet = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation: ${animate.rotate360} 15s linear infinite;
  overflow: hidden;

  //
  position: relative;
  border-radius: 50%;
  background-color: #209b85;
  opacity: 0.3;
`

export const Hole = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: #209b85;
  box-shadow: inset 1px 1px 5px #163040, 0 0 7px #63eed2;

  &:nth-of-type(1) {
    top: 2rem;
    left: 1.5rem;
    width: 0.75rem;
    height: 0.75rem;
  }

  &:nth-of-type(2) {
    top: -0.75rem;
    left: 5rem;
    width: 2.5rem;
    height: 2.5rem;
  }

  &:nth-of-type(3) {
    top: 0.5rem;
    left: 2rem;
    width: 1.25rem;
    height: 1.25rem;
  }

  &:nth-of-type(4) {
    top: -1.5rem;
    left: 3.5rem;
    width: 0.5rem;
    height: 0.5rem;
  }

  &:nth-of-type(5) {
    top: 1.25rem;
    left: 3.5rem;
    width: 2rem;
    height: 1.5rem;
  }
`
