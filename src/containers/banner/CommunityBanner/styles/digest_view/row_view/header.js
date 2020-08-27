import styled from 'styled-components'

import { cs } from '@/utils'

import Img from '@/Img'

export const Wrapper = styled.div`
  ${cs.flex('justify-between', 'align-start')};
  width: 100%;
  height: 40px;
  margin-top: 5px;
  margin-bottom: 10px;
`
export const FollowWrapper = styled.div`
  ${cs.flex('align-center')};
  color: #2d7eb1;
  font-size: 14px;
`
export const FollowIcon = styled(Img)`
  fill: #2d7eb1;
  width: 12px;
  height: 12px;
  display: block;
  margin-right: 4px;
`

export const HomeIcon = styled(Img)`
  fill: #2d7eb1;
  width: 15px;
  height: 15px;
  display: block;
  cursor: pointer;
`
