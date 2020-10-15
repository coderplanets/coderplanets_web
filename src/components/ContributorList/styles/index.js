import styled from 'styled-components'

import { css } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flex()};
  flex-wrap: wrap;
  margin-top: 15px;
`
export const AvatarLink = styled.a``

export const Avatar = styled(Img)`
  width: 25px;
  height: 25px;
  border-radius: 3px;
  margin-right: 5px;
  margin-bottom: 5px;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
  transition: opacity 0.2s;
`

export const CardWrapper = styled.div`
  padding: 10px;
`
