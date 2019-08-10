import styled from 'styled-components'

import Img from '@Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
  width: 150px;
  padding: 10px;
`
export const BackBtnWrapper = styled.div`
  ${cs.flex('align-center')};
  color: ${theme('banner.title')};
  font-size: 1rem;

  &:hover {
    cursor: pointer;
  }
`
export const BackTitle = styled.span`
  margin-left: 5px;
`
export const Holder = styled.div`
  margin-top: 100px;
`
export const BackIcon = styled(Img)`
  fill: ${theme('banner.title')};
  width: 18px;
  height: 18px;
  display: block;
`
