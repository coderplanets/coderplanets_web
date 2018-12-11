import React from 'react'

import { EMAIL_BUSINESS } from '../../config'

import {
  Wrapper,
  MainInfos,
  BaseInfo,
  Divider,
  Item,
  Support,
} from './styles/brief_view'

import BottomInfo from './BottomInfo'

const BriefView = ({ toggleSponsorHelper }) => (
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
        <Item
          href="http://www.miitbeian.gov.cn"
          rel="noopener noreferrer"
          target="_blank"
        >
          关于
        </Item>
        <Divider>|</Divider>
        <Item
          href="http://www.miitbeian.gov.cn"
          rel="noopener noreferrer"
          target="_blank"
        >
          使用帮助
        </Item>
        <Divider>|</Divider>
        <Item
          href="https://github.com/coderplanets/coderplanets_web/issues"
          rel="noopener noreferrer"
          target="_blank"
        >
          反馈与建议
        </Item>
        <Divider>|</Divider>
        <Item
          href="http://api.coderplanets.com/graphiql"
          rel="noopener noreferrer"
          target="_blank"
        >
          API
        </Item>
        <Divider>|</Divider>
        <Item href={`mailto:${EMAIL_BUSINESS}`}>商务合作</Item>

        <Divider>|</Divider>
        <Support onClick={toggleSponsorHelper}>打赏</Support>
        <Divider>|</Divider>
        <Item
          href="https://github.com/coderplanets/coderplanets_web/issues/269"
          rel="noopener noreferrer"
          target="_blank"
        >
          客户端
        </Item>
      </BaseInfo>
    </MainInfos>
    <BottomInfo />
  </Wrapper>
)

export default BriefView
