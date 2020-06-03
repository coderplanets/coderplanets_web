import React from 'react'

import { ICON_CMD, ICON_BASE, ASSETS_ENDPOINT } from '@/config'

import { SpaceGrow } from '@/components/Common'
import DotDivider from '@/components/DotDivider'
import IconText from '@/components/IconText'

import {
  Wrapper,
  IntroImg,
  IntroBlock,
  Title,
  ExtraInfo,
  UpInfo,
  UpIcon,
  UpNumber,
  // TypeTags,
  BodyText,
  FooterWrapper,
  BuildWithWrapper,
  CommentSlash,
  PublishAt,
  TechIcon,
  Divider,
  GithubIcon,
} from '../styles/list/card'

const Card = () => {
  return (
    <Wrapper>
      <IntroImg src={`${ASSETS_ENDPOINT}/works/market1.jpeg`} />
      <IntroBlock>
        <Title>coderplanets</Title>
        <BodyText>可能是最性感的开发者社区，来为你心爱的作品建立...</BodyText>

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
          {/* <PublishAt>mydearxym / 3小时前</PublishAt> */}
          <Divider />
          <IconText
            iconSrc={`${ICON_CMD}/works/comment.svg`}
            size="tiny"
            margin="5px"
          >
            44 <CommentSlash>/</CommentSlash> 178
          </IconText>
          <Divider />
          <PublishAt>发布于 3小时前</PublishAt>
          <SpaceGrow />
        </FooterWrapper>
      </IntroBlock>
      <ExtraInfo>
        <UpInfo>
          <UpIcon src={`${ICON_CMD}/works/vote_up.svg`} />
          <UpNumber>93</UpNumber>
        </UpInfo>
        <GithubIcon src={`${ICON_CMD}/works/github.svg`} />
      </ExtraInfo>
    </Wrapper>
  )
}

export default Card
