import styled from 'styled-components'

import { css } from '@/utils'

import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flex()};
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: 35px;
  margin-top: 10px;
`
export const Avatar = styled(Img)`
  ${css.circle('26px')};
  display: block;
  margin-right: 12px;
  margin-bottom: 15px;
`
