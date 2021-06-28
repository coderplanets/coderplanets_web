import { FC, memo } from 'react'

import { GALLERY } from '@/constant'
import { ICON_CMD, ASSETS_ENDPOINT } from '@/config'
import DotDivider from '@/components/DotDivider'

import type { TProps as TParentProps } from './index'
import Date from './Date'

import {
  Wrapper,
  ContentsWrapper,
  Header,
  TitleWrapper,
  Label,
  Title,
  Body,
  Desc,
  PreviewImg,
  FooterWrapper,
  Company,
  Icon,
} from '../styles/card/text_with_img_card'

type TProps = Omit<TParentProps, 'type'>

const TextWithImageCard: FC<TProps> = ({ item }) => {
  return (
    <Wrapper>
      <ContentsWrapper>
        <Header>
          <TitleWrapper>
            <Label>前端?</Label>
            <Title>Groupher 从构想到实现</Title>
          </TitleWrapper>
          <Date type={GALLERY.TEXT_WITH_IMAGE} />
        </Header>
        <Body>
          <Desc>
            GNU计划有多反资本家呢？他们甚至，此协议 规定不得阻止用户再分发。
          </Desc>
          <PreviewImg src={`${ASSETS_ENDPOINT}/works/market1.jpeg`} />
        </Body>
        <FooterWrapper>
          <Company>{item.company}</Company>
          <DotDivider radius={3} space={7} />
          <Icon src={`${ICON_CMD}/navi/chair.svg`} /> 200
          <DotDivider radius={3} />
          <Icon src={`${ICON_CMD}/navi/money-yuan.svg`} /> 200-300
        </FooterWrapper>
        <FooterWrapper>
          <Icon src={`${ICON_CMD}/navi/location.svg`} />
          深圳（南山区）
        </FooterWrapper>
      </ContentsWrapper>
    </Wrapper>
  )
}

export default memo(TextWithImageCard)
