import styled from 'styled-components'

import Img from '@/Img'
import CommunityFaceLogo from '@/widgets/CommunityFaceLogo'
import css from '@/utils/css'

type TIcon = { reverse: boolean; round: boolean }

export const Wrapper = styled.div`
  width: 10%;
  ${css.media.mobile`
    width: 20%;
  `};
`
export const ThemeIconWrapper = styled.div`
  margin-right: 16px;
`
export const Icon = styled(CommunityFaceLogo)<TIcon>`
  ${css.size(35)};
  border-radius: ${({ round }) => (round ? '100%' : '4px')};
  margin-left: 4px;
  transform: ${({ reverse }) => (reverse ? 'rotate(180deg)' : '')};
  ${css.media.mobile`
    margin-right: 10px;
  `};
`
export const ThemeDot = styled.div<{ bg: string }>`
  ${css.circle(35)};
  background: ${({ bg }) => bg};
`
export const DoraemonIcon = styled(Img)`
  ${css.size(52)};
  margin-left: -4px;
`
