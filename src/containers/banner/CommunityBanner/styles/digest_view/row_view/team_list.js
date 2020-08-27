import styled from 'styled-components'

import { cs } from '@/utils'

import Img from '@/Img'

export const Wrapper = styled.div`
  ${cs.flex()};
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: 35px;
  margin-top: 10px;
`
export const Avatar = styled(Img)`
  ${cs.circle('26px')};
  display: block;
  margin-right: 16px;
  margin-bottom: 15px;
`
