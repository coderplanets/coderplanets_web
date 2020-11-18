import styled from 'styled-components'

export const Br = styled.div`
  margin-top: ${({ top }) => `${top}px` || 0};
  margin-bottom: ${({ bottom }) => `${bottom}px` || 0};
`
export const Space = styled.span`
  margin-left: ${({ left }) => `${left}px` || 0};
  margin-right: ${({ right }) => `${right}px` || 0};
`
export const SpaceGrow = styled.div`
  flex-grow: 1;
`
