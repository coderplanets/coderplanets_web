/*
 *
 * Content
 *
 */

import React from 'react'

import { ArrowButton } from '@components/FanceButtons'

import {
  Wrapper,
  AboutBlock,
  ContributorBlock,
  ContributorsWrapper,
  Desc,
  Avatar,
} from '../styles/footer'

const FAKE_AVATAR =
  'https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/cmd/hot/hackernews.jpeg'

const Footer = () => {
  return (
    <Wrapper>
      <AboutBlock>
        关于酷导航
        <Desc>共收录信息 3485 条，最后更新：3小时前</Desc>
        <ArrowButton>参与贡献</ArrowButton>
      </AboutBlock>
      <AboutBlock>
        关于本周热榜
        <Desc>共有 RSS 源 334 个，最后抓取：3小时前</Desc>
        <ArrowButton>参与贡献</ArrowButton>
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
        <ArrowButton>参与贡献</ArrowButton>
      </ContributorBlock>
    </Wrapper>
  )
}

export default Footer
