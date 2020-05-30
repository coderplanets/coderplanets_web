import React from 'react'

import { ICON_CMD, ASSETS_ENDPOINT } from '@/config'
import DotDivider from '@/components/DotDivider'

import Date from './Date'

import {
  Wrapper,
  ContentsWrapper,
  Label,
  Title,
  Body,
  Desc,
  PreviewImg,
  BodyWrapper,
  LocationWrapper,
  Company,
  Icon,
} from '../styles/card'

const Card = ({ item }) => {
  return (
    <Wrapper>
      <Date />
      <ContentsWrapper>
        <Label>前端</Label>
        <Title>Groupher 从构想到实现</Title>
        <Body>
          <Desc>
            GNU计划有多反资本家呢？他们甚至，此协议 规定不得阻止用户再分发。
          </Desc>
          <PreviewImg src={`${ASSETS_ENDPOINT}/works/market1.jpeg`} />
        </Body>
        <BodyWrapper>
          <Company>{item.company}</Company>
          <DotDivider radius="3px" space="7px" />
          <Icon src={`${ICON_CMD}/navi/chair.svg`} /> 200
          <DotDivider radius="3px" />
          <Icon src={`${ICON_CMD}/navi/money-yuan.svg`} /> 200-300
        </BodyWrapper>
        <LocationWrapper>
          <Icon src={`${ICON_CMD}/navi/location.svg`} />
          深圳（南山区）
        </LocationWrapper>
      </ContentsWrapper>
    </Wrapper>
  )
}

export default React.memo(Card)
