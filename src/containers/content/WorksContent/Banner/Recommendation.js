/*
 *
 * WorksContent
 *
 */

import React from 'react'

import { ICON_CMD, ICON_BASE, ASSETS_ENDPOINT } from '@config'
import { buildLog } from '@utils'

import ExpandIcon from '@components/ExpandIcon'
import IconText from '@components/IconText'
import { Space } from '@components/Common'

import {
  Wrapper,
  Card,
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
} from '../styles/banner/recommendation'

/* eslint-disable-next-line */
const log = buildLog('C:WorksContent')

const Banner = () => {
  return (
    <Wrapper testid="worksContent">
      <Card>
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
      </Card>
      {/* <Card>
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
      </Card> */}
    </Wrapper>
  )
}

export default Banner
