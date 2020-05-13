import React from 'react'

import { GITHUB, API_SERVER_ADDR, ISSUE_ADDR } from '@/config'

import SocialList from './SocialList'
import BottomInfo from './BottomInfo'
import MobilBottomInfo from './MobilBottomInfo'

import {
  Wrapper,
  InnerWrapper,
  MainInfos,
  MainColumn,
  SiteInfo,
  SiteDesc,
  SiteLogo,
  Column,
  Title,
  Body,
  Item,
} from './styles/digest_view'

import {
  toggleSponsorHelper,
  toggleBusBanner,
  toggleSeniorHelper,
} from './logic'

const DigestView = ({ hasTopBorder }) => (
  <Wrapper hasTopBorder={hasTopBorder}>
    <InnerWrapper>
      <MainInfos>
        <MainColumn>
          <SiteInfo>
            <SiteLogo />
          </SiteInfo>
          <div>
            <SiteDesc
              href="https://github.com/groupher"
              rel="noopener noreferrer"
              target="_blank"
            >
              Power By @Groupher 2020
            </SiteDesc>
            <SocialList />
          </div>
        </MainColumn>
        <Column>
          <Title>About</Title>
          <Body>
            <Item href="/home/post/1" rel="noopener noreferrer" target="_blank">
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
            <Item
              href="/cps-support/posts"
              rel="noopener noreferrer"
              target="_blank"
            >
              使用指南
            </Item>
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
              href="/cps-support/post/42"
              rel="noopener noreferrer"
              target="_blank"
            >
              开发者指南
            </Item>
            <Item
              href={`${API_SERVER_ADDR}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              Developer API
            </Item>
            <Item href={`${GITHUB}`} rel="noopener noreferrer" target="_blank">
              Github
            </Item>
          </Body>
        </Column>
        <Column>
          <Title>商务合作</Title>
          <Body>
            <Item onClick={toggleBusBanner}>赞助社区</Item>
            <Item onClick={toggleBusBanner}>商务合作</Item>
          </Body>
        </Column>
      </MainInfos>
    </InnerWrapper>
    <BottomInfo />
    <MobilBottomInfo />
  </Wrapper>
)

export default React.memo(DigestView)
