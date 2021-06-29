import styled from 'styled-components'

import { css } from '@/utils'

import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flex()};
  width: 100%;
  flex-wrap: wrap;
  margin-top: 10px;
`
export const Avatar = styled(Img)`
  ${css.size(20)};
  margin-right: 8px;
  margin-bottom: 15px;
  border-radius: 5px;
`
