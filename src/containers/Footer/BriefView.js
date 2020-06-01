import React from 'react'

import { ISSUE_ADDR, ICON_CMD, API_SERVER_ADDR } from '@/config'

import BottomInfo from './BottomInfo'
import MobilBottomInfo from './MobilBottomInfo'

import {
  Wrapper,
  InnerWrapper,
  MainInfos,
  BaseInfo,
  Divider,
  Item,
  Support,
  CenterLogosWrapper,
  SiteLogo,
  LogoDivider,
  GithubLogo,
} from './styles/brief_view'

import { toggleSponsorHelper, toggleBusBanner } from './logic'

const BriefView = () => (
  <Wrapper>
    <InnerWrapper>
      <MainInfos>
        <BaseInfo>
          <Item href="/home/post/1" rel="noopener noreferrer" target="_blank">
            关于
          </Item>
          <Divider>|</Divider>
          <Item
            href="/cps-support/posts"
            rel="noopener noreferrer"
            target="_blank"
          >
            使用指南
          </Item>
          <Divider>|</Divider>
          <Item
            href={`${ISSUE_ADDR}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            反馈与建议
          </Item>
          <CenterLogosWrapper>
            <SiteLogo />
            <LogoDivider radius="4px" space="10px" />
            <GithubLogo src={`${ICON_CMD}/github.svg`} />
          </CenterLogosWrapper>
          <Item
            href={`${API_SERVER_ADDR}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            API
          </Item>
          <Divider>|</Divider>
          <Item onClick={toggleBusBanner}>商务合作</Item>

          <Divider>|</Divider>
          <Support onClick={toggleSponsorHelper}>打赏</Support>
          <Divider>|</Divider>
          <Item
            href={`${ISSUE_ADDR}/269`}
            rel="noopener noreferrer"
            target="_blank"
          >
            客户端
          </Item>
        </BaseInfo>
      </MainInfos>
    </InnerWrapper>
    <BottomInfo />
    <MobilBottomInfo />
  </Wrapper>
)

export default React.memo(BriefView)
