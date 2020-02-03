import styled from 'styled-components'

import Img from '@Img'
import { cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};
  color: #196780;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  margin-top: ${({ margin: { top } }) => top};
  margin-bottom: ${({ margin: { bottom } }) => bottom};
  margin-left: ${({ margin: { left } }) => left};
  margin-right: ${({ margin: { right } }) => right};
`
export const ArrowIcon = styled(Img)`
  fill: #196780;
  width: 30px;
  height: 30px;
  display: block;
  transition: all 0.25s;
`
export const CommonNavi = styled.div`
  font-size: 18px;
  color: #327faf;

  &:hover {
    font-weight: bold;
  }
`
export const CommonHint = styled.div`
  font-size: 13px;
  margin-bottom: 4px;
`
