import React from 'react'

import { ICON_CMD, ICON_BASE, ASSETS_ENDPOINT } from '@config'

import ExpandIcon from '@components/ExpandIcon'
import IconText from '@components/IconText'
import { Space } from '@components/BaseStyled'

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
  BuildWithWrapper,
  TechIcon,
} from '../styles/list/card'

const Card = () => {
  return (
    <Wrapper>
      <IntroWrapper>
        <IntroImg src={`${ASSETS_ENDPOINT}/works/market1.jpeg`} />
        <IntroBlock>
          <Title>coderplanets</Title>
          <Desc>
            <ExpandIcon
              icon={`${ICON_CMD}/works/website.svg`}
              text="网站"
              size="small"
              hideTextOnInit={false}
              content={<div>https://coderplanets.com</div>}
            />
            <Space right="8px" />
            <ExpandIcon
              icon={`${ICON_CMD}/works/android.svg`}
              text="Android"
              size="small"
              hideTextOnInit={false}
              content={<div>https://coderplanets.com</div>}
            />
            <Space right="8px" />
            <ExpandIcon
              icon={`${ICON_CMD}/works/apple.svg`}
              text="iOS"
              size="small"
              hideTextOnInit={false}
              content={<div>https://coderplanets.com</div>}
            />
          </Desc>
        </IntroBlock>

        <UpInfo>
          <UpIcon src={`${ICON_CMD}/arrow-up-o.svg`} />
          <UpNumber>93</UpNumber>
        </UpInfo>
      </IntroWrapper>
      <BodyText>可能是最性感的开发者社区，来为你心爱的作品建立...</BodyText>
      <FooterWrapper>
        <BuildWithWrapper>
          <TechIcon src={`${ICON_BASE}/pl/javascript.svg`} />
          <TechIcon src={`${ICON_BASE}/pl/java.svg`} />
          <TechIcon src={`${ICON_BASE}/pl/elixir.svg`} />
          <TechIcon src={`${ICON_BASE}/pl/ruby.svg`} />
        </BuildWithWrapper>
        <IconText iconSrc={`${ICON_CMD}/works/comment.svg`}>44</IconText>
      </FooterWrapper>
    </Wrapper>
  )
}

export default Card
