import styled from 'styled-components'

import { cs } from '@utils'

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
  ${cs.flex()};
  height: auto;
`
export const MainImage = styled(ImageBase)`
  width: calc(100% - 280px);
  height: 420px;
  border-radius: 2px;
`
export const SubImageWrapper = styled.div`
  ${cs.flexColumn('justify-between')};
`
export const SubImage = styled(ImageBase)`
  width: 276px;
  height: 208px;
  margin-left: 5px;
  border-radius: 2px;
`
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
