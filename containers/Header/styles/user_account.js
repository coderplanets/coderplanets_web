import styled from 'styled-components'

import { Img } from '../../../components'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  margin-right: 20px;
`
export const AvatarIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-right: 12px;
  border-radius: 3px;
  opacity: ${theme('avatarOpacity')};
`
export const DefaultUserIcon = styled(Img)`
  fill: ${theme('header.fg')};
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-right: 12px;
`
