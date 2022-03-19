import styled from 'styled-components'

// see example: https://codepen.io/mattbraun/pen/EywBJR

export const Wrapper = styled.div`
  position: relative;
  transform: rotate(180deg);
  margin-right: calc(50% - 19px);
  top: 16px;
`

export const LineBase = styled.span<{ curve: boolean }>`
  position: absolute;
  float: right;
  top: 0;
  background-color: transparent;
  width: 20px;
  display: block;
  border-radius: 5px;

  &:after {
    content: '';
    background-color: #194d5f;
    width: 20px;
    height: 3px;
    display: block;
    float: right;
    border-radius: 5px;
    transition: all 0.5s cubic-bezier(0.25, 1.7, 0.35, 0.8);
    z-index: -1;

    transform-origin: ${({ curve }) => (curve ? 'center center' : '')};
    transform: ${({ curve }) => (curve ? 'rotate(-15deg)' : '')};
  }
`
export const LeftLine = styled(LineBase)<{ curve: boolean }>`
  left: 0;
  transform: rotate(15deg);
  &:after {
    transform-origin: ${({ curve }) => (curve ? 'center center' : '')};
    transform: ${({ curve }) => (curve ? 'rotate(-15deg)' : '')};
  }
`
export const RightLine = styled(LineBase)<{ curve: boolean }>`
  left: ${({ curve }) => (!curve ? '18px' : '19px')};
  transform: rotate(-15deg);

  &:after {
    transform-origin: ${({ curve }) => (curve ? 'center center' : '')};
    transform: ${({ curve }) => (curve ? 'rotate(15deg)' : '')};
  }
`
