import React from 'react'

import { ICON, ICON_CMD, ICON_BASE, ASSETS_ENDPOINT } from '@/config'

import { SpaceGrow } from '@/components/Common'
import DotDivider from '@/components/DotDivider'
import IconText from '@/components/IconText'

import UpVote from '../UpVote'

import {
  Wrapper,
  IntroImg,
  IntroWrapper,
  Header,
  Title,
  BodyText,
  FooterWrapper,
  BuildWithWrapper,
  TechIcon,
  Divider,
  GithubIcon,
} from '../styles/list/card'

const Card = ({ withBg }) => {
  return (
    <Wrapper withBg={withBg}>
      <IntroImg src={`${ASSETS_ENDPOINT}/works/market1.jpeg`} />
      <IntroWrapper>
        <Header>
          <div>
            <Title>coderplanets</Title>
            <BodyText>
              可能是最性感的开发者社区，来为你心爱的作品建立...
            </BodyText>
          </div>
          <UpVote num={34} />
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
            iconSrc={`${ICON}/edit/publish-rocket.svg`}
            size="tiny"
            margin="5px"
          >
            3小时前
          </IconText>
          <Divider />
          <IconText
            iconSrc={`${ICON}/article/comment.svg`}
            size="tiny"
            margin="5px"
          >
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
