import React from 'react'

import { ICON_CMD } from '@/config'

import DotDivider from '@/components/DotDivider'
import { Br } from '@/components/Common'

import Date from './Date'

import {
  Wrapper,
  ContentsWrapper,
  Label,
  Title,
  Desc,
  FooterWrapper,
  Company,
  Icon,
} from '../styles/card/text_card'

const Card = ({ item }) => {
  return (
    <Wrapper>
      <Date />
      <ContentsWrapper>
        <Label>前端</Label>
        <Title>Groupher 从构想到实现</Title>
        <Desc>
          GNU计划有多反资本家呢？他们甚至，此协议 规定不得阻止用户再分发。
        </Desc>
        <FooterWrapper>
          <Company>{item.company}</Company>
          <DotDivider radius="3px" space="7px" />
          <Icon src={`${ICON_CMD}/navi/chair.svg`} /> 200
          <DotDivider radius="3px" />
          <Icon src={`${ICON_CMD}/navi/money-yuan.svg`} /> 200-300
        </FooterWrapper>
        <Br top="3px" />
        <FooterWrapper>
          <Icon src={`${ICON_CMD}/navi/location.svg`} />
          深圳（南山区）
        </FooterWrapper>
      </ContentsWrapper>
    </Wrapper>
  )
}

export default React.memo(Card)
