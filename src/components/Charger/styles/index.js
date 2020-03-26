import styled from 'styled-components'

// import Img from '@Img'
// import { theme } from '@utils'

export const Wrapper = styled.div.attrs(props => ({
  'data-testid': props.testid,
}))`
  text-align: center;
  position: relative;
`
export const Battery = styled.div`
  display: inline-block;
  position: relative;
  width: 2.25rem;
  height: 4.5rem;
  box-shadow: 0 0 0 0.2rem #425c77;
  background: white;
  border-radius: 0.09rem;

  &:before {
    content: '';
    position: absolute;
    left: 0.5625rem;
    right: 0.5625rem;
    top: -0.3375rem;
    height: 0.3375rem;
    width: 1.125rem;
    background: #425c77;
    border-radius: 0.18rem;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-right: 2.25rem solid transparent;
    border-bottom: 4.05rem solid rgba(255, 255, 255, 0.325);
  }
`
export const Liquid = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 2.25rem;
  background: #71fb85;
  /* animation: load 2.25s infinite; */

  &:before {
    left: 0;
    /* animation: liquid-2 2.25s infinite; */

    content: '';
    position: absolute;
    top: -0.5rem;
    height: 1.125rem;
    width: 1.4625rem;
    background: #71fb85;
    border-radius: 50%;
    opacity: 0;
  }

  &:after {
    right: 0;
    /* animation: liquid-1 2.25s infinite; */

    content: '';
    position: absolute;
    top: -0.5rem;
    height: 1.125rem;
    width: 1.4625rem;
    background: #71fb85;
    border-radius: 50%;
    opacity: 0;
  }
`
