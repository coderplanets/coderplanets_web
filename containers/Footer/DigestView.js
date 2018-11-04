import React from 'react'

import { ICON_CMD } from '../../config'

import {
  Wrapper,
  MainColumn,
  SiteInfo,
  SiteDesc,
  SiteLogo,
  SiteTitle,
  Column,
  Title,
  Body,
  Item,
} from './styles/digest_view'

import SocialList from './SocialList'
import GitSource from './GitSource'

const DigestView = () => (
  <Wrapper>
    <MainColumn>
      <SiteInfo>
        <SiteLogo src={`${ICON_CMD}/keyboard_logo.svg`} />
        <SiteTitle>coderplanets</SiteTitle>
      </SiteInfo>
      <div>
        <SiteDesc>powered by mastani-stack</SiteDesc>
        <SiteDesc>蜀ICP备17043722号-4</SiteDesc>
      </div>

      <br />
      <Title>contact us:</Title>
      <SocialList />
    </MainColumn>
    <Column>
      <Title>About</Title>
      <Body>
        <Item>关于CPS</Item>
        <Item>反馈与建议</Item>
        <Item>加入我们</Item>
        <Item>使用帮助</Item>
        <Item>侵权举报</Item>
      </Body>
    </Column>

    <Column>
      <Title>付费方案</Title>
      <Body>
        <Item>高级用户</Item>
        <Item>打赏支持</Item>
      </Body>
    </Column>

    <Column>
      <Title>开发者</Title>
      <Body>
        <Item>开发文档</Item>
        <Item>Developer API</Item>
        <Item>
          <GitSource
            title="F:"
            addr="https://ghbtns.com/github-btn.html?user=coderplanets&repo=coderplanets_web&type=star&count=true"
          />
        </Item>
        <Item offsetTop="-8px">
          <GitSource
            title="B:"
            addr="https://ghbtns.com/github-btn.html?user=coderplanets&repo=coderplanets_server&type=star&count=true"
          />
        </Item>
      </Body>
    </Column>
    <Column>
      <Title>客户端</Title>
      <Body>
        <Item>APP</Item>
        <Item>小程序</Item>
      </Body>
    </Column>
  </Wrapper>
)

export default DigestView
