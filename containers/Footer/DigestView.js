import React from 'react'

import { ICON_CMD } from '../../config'

import {
  Wrapper,
  MainInfos,
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
import BottomInfo from './BottomInfo'

const DigestView = () => (
  <Wrapper>
    <MainInfos>
      <MainColumn>
        <SiteInfo>
          <SiteLogo src={`${ICON_CMD}/keyboard_logo.svg`} />
          <SiteTitle>coderplanets</SiteTitle>
        </SiteInfo>
        <div>
          <SiteDesc
            href="https://github.com/mastani-stack"
            rel="noopener noreferrer"
            target="_blank"
          >
            powered by mastani-stack
          </SiteDesc>
          <SiteDesc
            href="http://www.miitbeian.gov.cn"
            rel="noopener noreferrer"
            target="_blank"
          >
            蜀ICP备17043722号-4
          </SiteDesc>
        </div>

        <br />
        <Title>contact us:</Title>
        <SocialList />
      </MainColumn>
      <Column>
        <Title>About</Title>
        <Body>
          <Item>关于CPS</Item>
          <Item
            href="https://github.com/coderplanets/coderplanets_web/issues"
            rel="noopener noreferrer"
            target="_blank"
          >
            反馈与建议
          </Item>
          <Item
            href="https://github.com/coderplanets"
            rel="noopener noreferrer"
            target="_blank"
          >
            加入我们
          </Item>
          <Item>使用帮助</Item>
          <Item>商务合作</Item>
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
          <Item
            href="http://api.coderplanets.com/graphiql"
            rel="noopener noreferrer"
            target="_blank"
          >
            Developer API
          </Item>
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
    </MainInfos>
    <BottomInfo />
  </Wrapper>
)

export default DigestView
