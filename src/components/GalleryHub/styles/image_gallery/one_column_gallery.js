import styled from 'styled-components'

import {
  WrapperBase,
  BlockBase,
  ImageBase,
  IntroBase,
  IntroHeadBase,
  TitleBase,
  FooterBase,
  FlagIconBase,
} from './index'

export const Wrapper = styled(WrapperBase)``

export const Block = styled(BlockBase)`
  width: 100%;
`
export const ImageWrapper = styled.div`
  height: auto;
`
export const Image = styled(ImageBase)``
export const Intro = styled(IntroBase)`
  padding-top: 16px;
  padding-bottom: 16px;
`
export const IntroHead = styled(IntroHeadBase)``
export const Title = styled(TitleBase)`
  font-size: 18px;
`
export const Footer = styled(FooterBase)``
export const FlagIcon = styled(FlagIconBase)`
  width: 18px;
`
