import styled from 'styled-components'

import Img from '@Img'
import { theme, cs, animate } from '@utils'

export const NumbersWrapper = styled.div`
  ${cs.flex('align-center')};
  margin-top: -10px;
`
export const NumbersInfo = styled(NumbersWrapper)``
// background: ${theme('banner.numberHoverBg')};
export const NumberSection = styled.div`
  ${cs.flexColumn('justify-center')};

  padding: 0 5px;
  border-radius: 4px;

  background: ${({ active }) => (active ? theme('banner.numberHoverBg') : '')};

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
    color: ${({ readOnly }) => (readOnly ? '' : theme('banner.active'))};
    text-decoration: ${({ readOnly }) => (readOnly ? '' : 'underline')};
    animation: ${animate.pulseRule};
  }
  ${cs.media.tablet`font-size: 0.9rem`};
  ${cs.media.mobile`font-size: 0.9rem`};
`
export const NumberItem = styled.div`
  font-size: 1.5rem;
  text-align: center;

  color: ${theme('banner.number')};
  &:hover {
    color: ${({ readOnly }) => (readOnly ? '' : theme('banner.active'))};
    text-decoration: ${({ readOnly }) => (readOnly ? '' : 'underline')};
    animation: ${animate.pulseRule};
  }

  ${cs.media.tablet`font-size: 1rem`};
  ${cs.media.mobile`font-size: 1rem`};
`

export const NumberLoading = styled(Img)`
  fill: ${theme('banner.number')};
  width: 24px;
  height: 24px;
  margin-top: 5px;
  animation: ${animate.rotate360Rule};
`

export const NumberDivider = styled.div`
  border: 1px solid;
  border-color: ${theme('banner.numberDivider')};
  height: 70%;
  align-self: center;
  margin-left: 10px;
  margin-right: 10px;
  ${cs.media.tablet`
      margin-left: 2px;
      margin-right: 2px;
      height: 50%;
  `};
`
