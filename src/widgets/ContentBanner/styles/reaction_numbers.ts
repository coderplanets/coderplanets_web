import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import animate from '@/utils/animations'

export const NumbersWrapper = styled.div`
  ${css.flex('align-center')};
  margin-top: -2.1rem;
`
export const NumbersInfo = styled(NumbersWrapper)`
  margin-top: 0;
`
// background: ${theme('banner.numberHoverBg')};
export const NumberSection = styled.div<{ readOnly: boolean }>`
  ${css.flexColumn('justify-center')};

  padding: 0 5px;
  border-radius: 4px;

  &:hover {
    background: ${({ readOnly }) =>
      readOnly ? '' : theme('banner.numberHoverBg')};
    cursor: ${({ readOnly }) => (readOnly ? '' : 'pointer')};
  }
`
export const NumberTitle = styled.div<{ readOnly: boolean }>`
  color: ${theme('banner.numberDesc')};
  text-align: center;
  &:hover {
    color: ${({ readOnly }) => (readOnly ? '' : '#f1c48f')};
    text-decoration: ${({ readOnly }) => (readOnly ? '' : 'underline')};
    animation: ${animate.pulse} 0.4s linear;
  }
`
export const NumberItem = styled.div<{ readOnly: boolean }>`
  font-size: 1.5rem;
  text-align: center;

  color: ${theme('banner.number')};
  &:hover {
    color: ${({ readOnly }) => (readOnly ? '' : '#f1c48f')};
    text-decoration: ${({ readOnly }) => (readOnly ? '' : 'underline')};
    animation: ${animate.pulse} 0.4s linear;
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
