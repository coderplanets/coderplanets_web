import styled from 'styled-components'

import { theme, cs, animate } from '../../../utils'

export const NumbersWrapper = styled.div`
  ${cs.flex('align-center')};
  margin-top: -2.1rem;
`
export const NumbersInfo = styled(NumbersWrapper)`
  margin-top: 0;
`
// background: ${theme('banner.numberHoverBg')};
export const NumberSection = styled.div`
  ${cs.flexColumn('justify-center')};

  padding: 0 5px;
  border-radius: 4px;

  &:hover {
    background: ${({ readOnly }) =>
      readOnly ? '' : theme('banner.numberHoverBg')};
    cursor: ${({ readOnly }) => (readOnly ? '' : 'pointer')};
  }
`
export const NumberTitle = styled.div`
  color: ${theme('banner.numberDesc')};
  text-align: center;
  &:hover {
    color: ${({ readOnly }) => (readOnly ? '' : '#f1c48f')};
    text-decoration: ${({ readOnly }) => (readOnly ? '' : 'underline')};
    animation: ${animate.pulseRule};
  }
`
export const NumberItem = styled.div`
  font-size: 1.5rem;
  text-align: center;

  color: ${theme('banner.number')};
  &:hover {
    color: ${({ readOnly }) => (readOnly ? '' : '#f1c48f')};
    text-decoration: ${({ readOnly }) => (readOnly ? '' : 'underline')};
    animation: ${animate.pulseRule};
  }
`
export const NumberDivider = styled.div`
  border: 1px solid;
  border-color: ${theme('banner.numberDivider')};
  height: 70%;
  align-self: center;
  margin-left: 10px;
  margin-right: 10px;
`
