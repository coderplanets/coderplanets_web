import styled from 'styled-components'

import Img from 'components/Img'
import CommunityFaceLogo from 'components/CommunityFaceLogo'
import { cs } from 'utils'

export const Wrapper = styled.div`
  width: 10%;
  ${cs.media.mobile`
    width: 20%;
  `};
`
export const ThemeIconWrapper = styled.div`
  margin-right: 16px;
`
export const Icon = styled(CommunityFaceLogo)`
  width: 35px;
  height: 35px;
  border-radius: ${({ round }) => (round ? '100%' : '4px')};
  margin-left: 4px;
  transform: ${({ reverse }) => (reverse ? 'rotate(180deg)' : '')};
  ${cs.media.mobile`
    margin-right: 10px;
  `};
`
export const ThemeDot = styled.div`
  ${cs.circle('35px')};
  background: ${({ bg }) => bg};
`
export const DoraemonIcon = styled(Img)`
  width: 52px;
  height: 52px;
  display: block;
  margin-left: -4px;
`
