import React from 'react'

import { ICON, ICON_CMD, ICON_BASE, ASSETS_ENDPOINT } from '@/config'

import { SpaceGrow } from '@/components/Common'
import DotDivider from '@/components/DotDivider'
import IconText from '@/components/IconText'

import {
  Wrapper,
  IntroImg,
  IntroWrapper,
  Header,
  Title,
  UpInfo,
  UpIcon,
  UpNumber,
  BodyText,
  FooterWrapper,
  BuildWithWrapper,
  TechIcon,
  Divider,
  GithubIcon,
} from '../styles/list/card'

const Card = ({ noBorder }) => {
  return (
    <Wrapper noBorder={noBorder}>
      <IntroImg src={`${ASSETS_ENDPOINT}/works/market1.jpeg`} />
      <IntroWrapper>
        <Header>
          <div>
            <Title>coderplanets</Title>
            <BodyText>
              可能是最性感的开发者社区，来为你心爱的作品建立...
            </BodyText>
          </div>
          <UpInfo>
            <UpIcon src={`${ICON_CMD}/works/vote_up.svg`} />
            <UpNumber>93</UpNumber>
          </UpInfo>
        </Header>
        <FooterWrapper>
          <IconText
            iconSrc={`${ICON_CMD}/works/topic.svg`}
            margin="1px"
            size="tiny"
          >
            协作工具
          </IconText>
          <DotDivider radius="4px" space="10px" /> 网站
          <Divider />
          <BuildWithWrapper>
            <TechIcon src={`${ICON_BASE}/pl/javascript.svg`} />
            <TechIcon src={`${ICON_BASE}/pl/java.svg`} />
            <TechIcon src={`${ICON_BASE}/pl/elixir.svg`} />
            <TechIcon src={`${ICON_BASE}/pl/ruby.svg`} />
          </BuildWithWrapper>
          <Divider />
          <IconText
            iconSrc={`${ICON}/publish_rocket.svg`}
            size="tiny"
            margin="5px"
          >
            3小时前
          </IconText>
          <Divider />
          <IconText iconSrc={`${ICON}/comment.svg`} size="tiny" margin="5px">
            44
          </IconText>
          <SpaceGrow />
          <GithubIcon src={`${ICON_CMD}/works/github.svg`} />
        </FooterWrapper>
      </IntroWrapper>
    </Wrapper>
  )
}

export default Card
