import React from 'react'

import { ISSUE_ADDR, API_SERVER_ADDR } from '@config'
import BottomInfo from './BottomInfo'
import MobilBottomInfo from './MobilBottomInfo'

import {
  Wrapper,
  MainInfos,
  BaseInfo,
  Divider,
  Item,
  Support,
} from './styles/brief_view'

import { toggleSponsorHelper, toggleBusBanner } from './logic'

const BriefView = () => (
  <Wrapper>
    <MainInfos>
      <BaseInfo>
        <Item
          href="http://www.miitbeian.gov.cn"
          rel="noopener noreferrer"
          target="_blank"
        >
          蜀ICP备17043722号-4
        </Item>
        <Divider>|</Divider>
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
        <Item href={`${ISSUE_ADDR}`} rel="noopener noreferrer" target="_blank">
          反馈与建议
        </Item>
        <Divider>|</Divider>
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
    <BottomInfo />
    <MobilBottomInfo />
  </Wrapper>
)

export default BriefView
