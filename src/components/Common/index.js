import styled from 'styled-components'

export const Br = styled.div`
  margin-top: ${({ top }) => top || 0};
  margin-bottom: ${({ bottom }) => bottom || 0};
`
export const Space = styled.span`
  margin-left: ${({ left }) => left || 0};
  margin-right: ${({ right }) => right || 0};
`
export const SpaceGrow = styled.div`
  flex-grow: 1;
`
