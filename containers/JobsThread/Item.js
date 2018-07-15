import React from 'react'
import TimeAgo from 'timeago-react'

import { cutFrom } from '../../utils'
import { ICON_ASSETS } from '../../config'

import {
  Wrapper,
  Avatar,
  TitleLink,
  LinkIcon,
  Main,
  TopHalf,
  Breif,
  Title,
  TitleTag,
  SecondHalf,
  BodyDigest,
  Extra,
  TitleTagDot,
  RightInfo,
  SalaryWrapper,
  CompanyTitle,
} from './styles/item'

import * as logic from './logic'

const Item = ({ entry, active }) => (
  <Wrapper current={entry} active={active}>
    <div>
      <Avatar
        src="http://coderplanets.oss-cn-beijing.aliyuncs.com/mock/me.jpg"
        alt="avatar"
      />
    </div>
    <Main>
      <TopHalf>
        <Breif onClick={logic.onTitleSelect.bind(this, entry)}>
          <Title>{entry.title}</Title>
          <TitleLink>
            <LinkIcon src={`${ICON_ASSETS}/cmd/link.svg`} />
            <span style={{ marginLeft: 9 }}>拉钩</span>
          </TitleLink>
          <TitleTag>
            <TitleTagDot />
            成都
          </TitleTag>
        </Breif>
      </TopHalf>

      <SecondHalf>
        <Extra>
          mydearxym 发布于:{' '}
          <TimeAgo datetime={entry.insertedAt} locale="zh_CN" /> ⁝ 浏览:{' '}
          {entry.views}
        </Extra>
        <BodyDigest>{cutFrom(entry.digest, 90)}</BodyDigest>
      </SecondHalf>
    </Main>

    <RightInfo>
      <CompanyTitle>中央公园</CompanyTitle>
      <SalaryWrapper>15k - 30k</SalaryWrapper>
    </RightInfo>
  </Wrapper>
)

export default Item
