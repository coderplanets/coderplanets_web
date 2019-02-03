import React from 'react'

import {
  GITHUB_WEB_ADDR,
  GITHUB_SERVER_ADDR,
  API_SERVER_ADDR,
  ISSUE_ADDR,
} from 'config'

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
// import GitSource from './GitSource'
import BottomInfo from './BottomInfo'
import MobilBottomInfo from './MobilBottomInfo'

import {
  toggleSponsorHelper,
  toggleBusBanner,
  toggleSeniorHelper,
} from './logic'

const DigestView = () => (
  <Wrapper>
    <MainInfos>
      <MainColumn>
        <SiteInfo>
          <SiteLogo />
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
          <Item
            href="https://coderplanets.com/home/post/1"
            rel="noopener noreferrer"
            target="_blank"
          >
            关于CPS
          </Item>
          <Item
            href={`${ISSUE_ADDR}`}
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
          <Item onClick={toggleBusBanner}>商务合作</Item>
        </Body>
      </Column>

      <Column>
        <Title>增值服务</Title>
        <Body>
          <Item onClick={toggleSeniorHelper}>CPS会员</Item>
          <Item onClick={toggleSponsorHelper}>打赏支持</Item>
        </Body>
      </Column>

      <Column>
        <Title>开发者</Title>
        <Body>
          <Item
            href={`${GITHUB_WEB_ADDR}/tree/dev/docs`}
            rel="noopener noreferrer"
            target="_blank"
          >
            开发文档
          </Item>
          <Item
            href={`${API_SERVER_ADDR}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Developer API
          </Item>
          <Item
            href={`${GITHUB_WEB_ADDR}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Source Code(F)
          </Item>
          <Item
            href={`${GITHUB_SERVER_ADDR}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Source Code(B)
          </Item>
          {/*
              <Item offsetTop="-8px">
              <GitSource
              title="B:"
              addr="https://ghbtns.com/github-btn.html?user=coderplanets&repo=coderplanets_server&type=star&count=true"
              />
              </Item>
            */}
        </Body>
      </Column>
      <Column>
        <Title>客户端</Title>
        <Body>
          <Item
            href={`${ISSUE_ADDR}/269`}
            rel="noopener noreferrer"
            target="_blank"
          >
            APP
          </Item>
          <Item
            href={`${ISSUE_ADDR}/270`}
            rel="noopener noreferrer"
            target="_blank"
          >
            小程序
          </Item>
        </Body>
      </Column>
    </MainInfos>
    <BottomInfo />
    <MobilBottomInfo />
  </Wrapper>
)

export default DigestView
