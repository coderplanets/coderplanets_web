import styled from 'styled-components'

import { cs } from '@utils'

import { Wrapper as BaseWrapper, AvatarsMore } from './index'
// height: 49px;
const BaseAvatarItem = styled.li`
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  position: relative;
  width: 25px;
  opacity: 0.75;
  &:hover {
    opacity: 1;
  }
  ${BaseWrapper}:hover & {
    margin-left: 5px;
  }
  transition: all 0.3s;
`
export const Wrapper = styled(BaseAvatarItem)`
  ${cs.media.mobile`display: none`};
`
export const NumbersMore = styled(AvatarsMore)``
export const TextMore = styled(AvatarsMore)`
  font-size: 20px;
  padding-left: 4px;
`
export const DotText = styled.div`
  margin-top: -8px;
`
