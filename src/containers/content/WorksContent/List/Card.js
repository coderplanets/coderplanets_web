import React from 'react'

import { ICON_CMD, ASSETS_ENDPOINT } from '@config'

import IconText from '@components/IconText'
import {
  Wrapper,
  IntroWrapper,
  IntroImg,
  IntroBlock,
  Title,
  UpInfo,
  UpIcon,
  UpNumber,
  Desc,
  BodyText,
  FooterWrapper,
} from '../styles/list/card'

const Card = () => {
  return (
    <Wrapper>
      <IntroWrapper>
        <IntroImg src={`${ASSETS_ENDPOINT}/works/market1.jpeg`} />
        <IntroBlock>
          <Title>coderplanets</Title>
          <Desc>
            <IconText iconSrc={`${ICON_CMD}/view-o.svg`}>.</IconText>
            <IconText iconSrc={`${ICON_CMD}/view-o.svg`}>.</IconText>
          </Desc>
        </IntroBlock>

        <UpInfo>
          <UpIcon src={`${ICON_CMD}/arrow-up-o.svg`} />
          <UpNumber>93</UpNumber>
        </UpInfo>
      </IntroWrapper>
      <BodyText>可能是最性感的开发者社区，来为你心爱的作品建立...</BodyText>
      <FooterWrapper>
        <IconText iconSrc={`${ICON_CMD}/view-o.svg`}>44</IconText>
        <IconText iconSrc={`${ICON_CMD}/view-o.svg`}>xx / xx / xx</IconText>
      </FooterWrapper>
    </Wrapper>
  )
}

export default Card
