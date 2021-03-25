import React from 'react'

import { ISSUE_ADDR, ICON_CMD, API_SERVER_ADDR } from '@/config'

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
} from '../styles/desktop_view/brief_view'

import { toggleSponsorHelper } from '../logic'

const BriefView = ({ curView, metric }) => {
  return (
    <Wrapper>
      <InnerWrapper metric={metric}>
        <MainInfos center={curView === 'BRIEF' || false}>
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
              <LogoDivider radius={4} space={10} />
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
    </Wrapper>
  )
}

export default React.memo(BriefView)
