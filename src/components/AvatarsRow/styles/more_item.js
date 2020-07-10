import styled from 'styled-components'

import { cs } from '@/utils'

import { Wrapper as BaseWrapper, AvatarsMore } from './index'
import { getAvatarSize, getMoreTextWidth } from './metric'

const BaseAvatarItem = styled.li`
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  position: relative;
  width: ${({ size }) => getAvatarSize(size)};
  opacity: 0.75;
  &:hover {
    opacity: 1;
  }
  ${BaseWrapper}:hover & {
    margin-left: 0;
  }
  transition: all 0.3s;
`
export const Wrapper = styled(BaseAvatarItem)`
  ${cs.media.mobile`display: none`};
`
export const NumbersMore = styled(AvatarsMore)`
  height: ${({ size }) => getAvatarSize(size)};
  width: ${({ total }) => getMoreTextWidth(total)};
  font-weight: 400;
  padding-left: 2px;
  margin-left: 4px;
  border-radius: 0 10px 10px 0;
`
export const TextMore = styled(AvatarsMore)`
  font-size: 20px;
  padding-left: 4px;
`
export const DotText = styled.div`
  margin-top: -8px;
`
