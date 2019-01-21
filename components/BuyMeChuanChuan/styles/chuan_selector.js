import styled from 'styled-components'

import { animate, theme, cs } from 'utils'
import Img from '../../Img'

export const SelectBox = styled.div`
  ${cs.flex('align-center')};
  justify-content: left;

  margin-top: 10px;
  border: 1px solid;
  border-color: ${theme('banner.desc')};
  border-radius: 4px;
  background: ${theme('modal.innerSelectBg')};
  height: 90px;

  background-image: linear-gradient(#51abb2 2px, transparent 2px),
    linear-gradient(90deg, #51abb200 2px, transparent 2px),
    linear-gradient(#5eabb333 1px, transparent 1px),
    linear-gradient(90deg, #5eabb336 1px, transparent 1px);
  background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
`

export const ChuanChuanIcon = styled(Img)`
  width: 55px;
  height: 55px;
`

export const Selectors = styled.div`
  ${cs.flex()};
`
export const By = styled.div`
  ${cs.flex('align-both')};

  width: 40px;
  height: 40px;
  font-size: 1.6rem;
  color: ${theme('font')};
  margin-left: -10px;
`

export const Circle = styled.div`
  ${cs.flex('align-both')};
  ${cs.circle('38px')};
  border: 1px solid;
  border-color: ${theme('font')};
  margin-right: 10px;
  color: ${({ active }) => (active ? 'white' : '#51abb2')};
  background-color: ${({ active }) => (active ? theme('font') : '')};
  &:hover {
    cursor: pointer;
    animation: ${animate.pulseRule};
  }
  transition: background-color 0.3s ease-out;
`
