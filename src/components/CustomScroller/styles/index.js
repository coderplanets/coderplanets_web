import styled from 'styled-components'

// import { getShadowWidth } from './helpers'

export const WrapperBase = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`
export const ScrollWrapperBase = styled.div`
  width: 100%;
  height: 100%;
`
export const ShadowBarBase = styled.div`
  position: absolute;
  border-top: ${({ withBorder }) => (withBorder ? '1px solid' : 'none')};
  border-color: ${({ withBorder }) => (withBorder ? '#084255' : 'none')};
  z-index: 1;
  opacity: 0;

  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: all 0.5s;
`
