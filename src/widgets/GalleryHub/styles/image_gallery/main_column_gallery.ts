import styled from 'styled-components'

import css from '@/utils/css'

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
  height: auto;
  padding-right: 0;
`
export const ImageWrapper = styled.div`
  ${css.flexGrow('justify-between')};
  width: 100%;
`
export const MainImageWrapper = styled.div`
  flex-grow: 1;
  width: calc(100% - 420px);
`
export const MainImage = styled(ImageBase)`
  height: 424px;
  width: 100%;
  border-radius: 2px;
`
export const SubImageWrapper = styled.div`
  ${css.flexGrow()};
  flex-wrap: wrap;
  width: 412px;
`
export const SubImage = styled(ImageBase)<{ marginBottom: boolean }>`
  width: 200px;
  height: 208px;
  margin-left: 5px;
  border-radius: 2px;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? '4px' : 'none')};
`
export const Intro = styled(IntroBase)`
  padding-top: 16px;
  padding-bottom: 16px;
`
export const IntroHead = styled(IntroHeadBase)``
export const Title = styled(TitleBase)`
  font-size: 16px;
`
export const Footer = styled(FooterBase)``
export const FlagIcon = styled(FlagIconBase)`
  width: 18px;
`
