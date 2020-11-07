import styled from 'styled-components'

import { css, theme, WIDTH } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flexColumn()};
`
export const ContentWrapper = styled.div`
  ${css.flex('align-both')};
  margin-top: 45px;
  margin-left: ${({ center }) => (center ? '5%' : 'none')};
  transition: all 0.25s;
`
export const InnerWrapper = styled.div`
  ${css.flex()};
  width: 100%;
  height: 100%;
  max-width: ${WIDTH.ARTICLE.PAGE};
`
export const ContentsWrapper = styled.div`
  ${css.flexColumn('justify-center')};
  width: ${({ center }) => (center ? '100%' : 'calc(100% - 140px)')};
  transition: all 0.25s;
`
export const SubscribedBox = styled.div`
  color: ${theme('baseColor.green')};
  font-weight: bold;
`

export const BtnWrapper = styled.div`
  ${css.flex('align-center')};
`

export const PrefixIcon = styled(Img)`
  fill: ${({ primary }) =>
    primary ? theme('button.primary') : theme('button.fg')};
  width: 14px;
  height: 14px;
  margin-right: 3px;
  display: block;
`
export const Text = styled.div``
