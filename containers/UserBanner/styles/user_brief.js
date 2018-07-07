import styled from 'styled-components'

import { Img } from '../../../components'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
`

export const AvatarWrapper = styled.div`
  margin-right: 12px;
`

export const Avatar = styled(Img)`
  border-radius: 50%;
  width: 65px;
  height: 65px;
`

export const UserTitle = styled.div`
  font-size: 1.2rem;
  color: ${theme('banner.title')};
  margin-bottom: 5px;
`

export const UserDesc = styled.div`
  font-size: 0.9rem;
  color: ${theme('banner.desc')};
`
