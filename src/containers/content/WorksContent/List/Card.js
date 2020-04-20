import React from 'react'

import { ICON_CMD, ICON_BASE, ASSETS_ENDPOINT } from '@config'

import { SpaceGrow } from '@components/BaseStyled'
// import ExpandIcon from '@components/ExpandIcon'
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
  // TypeTags,
  BodyText,
  FooterWrapper,
  BuildWithWrapper,
  // PublishAt,
  TechIcon,
  Divider,
  GithubIcon,
} from '../styles/list/card'

const Card = () => {
  return (
    <Wrapper>
      <IntroWrapper>
        <IntroImg src={`${ASSETS_ENDPOINT}/works/market1.jpeg`} />

        <IntroBlock>
          <Title>coderplanets</Title>
          {/* <TypeTags>
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
          </TypeTags> */}
          <BodyText>可能是最性感的开发者社区，来为你心爱的作品建立...</BodyText>

          <FooterWrapper>
            <IconText iconSrc={`${ICON_CMD}/works/website.svg`}>网站</IconText>
            {/* <ExpandIcon
              icon={`${ICON_CMD}/works/website.svg`}
              text="网站"
              size="small"
              hideTextOnInit={false}
              content={<div>https://coderplanets.com</div>}
            /> */}
            <Divider />
            <IconText iconSrc={`${ICON_CMD}/navi/topic.svg`}>协作工具</IconText>
            <Divider />
            <BuildWithWrapper>
              <TechIcon src={`${ICON_BASE}/pl/javascript.svg`} />
              <TechIcon src={`${ICON_BASE}/pl/java.svg`} />
              <TechIcon src={`${ICON_BASE}/pl/elixir.svg`} />
              <TechIcon src={`${ICON_BASE}/pl/ruby.svg`} />
            </BuildWithWrapper>
            {/* <PublishAt>mydearxym / 3小时前</PublishAt> */}
            <Divider />
            <IconText iconSrc={`${ICON_CMD}/works/comment.svg`}>44</IconText>
            <SpaceGrow />
            <GithubIcon src={`${ICON_CMD}/works/github.svg`} />
          </FooterWrapper>
        </IntroBlock>
        <UpInfo>
          <UpIcon src={`${ICON_CMD}/arrow-up-o.svg`} />
          <UpNumber>93</UpNumber>
        </UpInfo>
      </IntroWrapper>
    </Wrapper>
  )
}

export default Card
