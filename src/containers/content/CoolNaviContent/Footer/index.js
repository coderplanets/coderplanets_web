/*
 *
 * Content
 *
 */

import React from 'react'

import { ICON_CMD } from '@config'

import {
  Wrapper,
  AboutBlock,
  ContributorBlock,
  ContributorsWrapper,
  Desc,
  Avatar,
  MoreLink,
  MoreText,
  ArrowIcon,
} from '../styles/footer'

const FAKE_AVATAR =
  'https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/cmd/hot/hackernews.jpeg'

const Footer = () => {
  return (
    <Wrapper>
      <AboutBlock>
        关于酷导航
        <Desc>共收录信息 3485 条，最后更新：3小时前</Desc>
        <MoreLink>
          <MoreText>查看详细</MoreText>
          <ArrowIcon src={`${ICON_CMD}/navi/navi_back.svg`} />
        </MoreLink>
      </AboutBlock>
      <AboutBlock>
        关于本周热榜
        <Desc>共有 RSS 源 334 个，最后抓取：3小时前</Desc>
        <MoreLink>
          <MoreText>查看详细</MoreText>
          <ArrowIcon src={`${ICON_CMD}/navi/navi_back.svg`} />
        </MoreLink>
      </AboutBlock>
      <ContributorBlock>
        本条目贡献者
        <ContributorsWrapper>
          <Avatar src={FAKE_AVATAR} />
          <Avatar src={FAKE_AVATAR} />
          <Avatar src={FAKE_AVATAR} />
          <Avatar src={FAKE_AVATAR} />
          <Avatar src={FAKE_AVATAR} />
        </ContributorsWrapper>
        <MoreLink>
          <MoreText>参与贡献</MoreText>
          <ArrowIcon src={`${ICON_CMD}/navi/navi_back.svg`} />
        </MoreLink>
      </ContributorBlock>
    </Wrapper>
  )
}

export default Footer
