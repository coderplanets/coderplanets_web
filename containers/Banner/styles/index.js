import styled from 'styled-components'

import { theme, animate, cs } from 'utils'

export const BaseBanner = styled.nav`
  ${cs.flexColumn('justify-center')};

  position: relative;
  min-height: 140px;
  background: ${theme('banner.bg')};
  border-bottom: 1px solid;
  border-bottom-color: ${theme('banner.spliter')};
  @media (max-height: 800px) {
    min-height: 130px;
  }
`

export const BaseBannerContent = styled.div`
  ${cs.flex()};
  margin-left: 8%;
  margin-right: 8%;
`

export const BaseTabber = styled.div`
  ${cs.flex()};
  position: absolute;
  bottom: -16px;
  width: 80vw;
`

export const NumbersWrapper = styled.div`
  ${cs.flex('align-center')};
  margin-top: -2rem;
`
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
  &:hover {
    color: ${({ readOnly }) => (readOnly ? '' : theme('banner.active'))};
    text-decoration: ${({ readOnly }) => (readOnly ? '' : 'underline')};
    animation: ${animate.pulseRule};
  }
`
export const NumberItem = styled.div`
  font-size: 1.5rem;
  color: ${theme('banner.number')};
  &:hover {
    color: ${({ readOnly }) => (readOnly ? '' : theme('banner.active'))};
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
