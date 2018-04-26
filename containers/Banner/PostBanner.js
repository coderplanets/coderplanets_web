import React from 'react'
import { prettyNum } from '../../utils'

import { NumberSection, NumberDivider, NumberTitle, NumberItem } from './styles'

import {
  BannerContainer,
  BannerContentWrapper,
  PostBrief,
  Title,
  Desc,
  NumbersInfo,
  PrintTag,
  Username,
} from './styles/post_banner'

const PostNumbers = () => (
  <NumbersInfo>
    <NumberSection dead>
      <NumberTitle dead>阅读</NumberTitle>
      <NumberItem dead>{prettyNum(1922)}</NumberItem>
    </NumberSection>
    <NumberDivider />
    <NumberSection>
      <NumberTitle>喜欢</NumberTitle>
      <NumberItem>{prettyNum(33)}</NumberItem>
    </NumberSection>
    <NumberDivider />
    <NumberSection>
      <NumberTitle>收藏</NumberTitle>
      <NumberItem>{prettyNum(12)}</NumberItem>
    </NumberSection>
    <NumberDivider />
    <NumberSection>
      <NumberTitle>关注</NumberTitle>
      <NumberItem>{prettyNum(2)}</NumberItem>
    </NumberSection>
  </NumbersInfo>
)

const PostBanner = () => (
  <BannerContainer>
    <BannerContentWrapper>
      <PostBrief>
        <Title>
          技术交流 :基于 Elixir-GraphQL-React 的下一代论坛系统的设计雏形{' '}
        </Title>
        <Desc>
          <PrintTag>转载</PrintTag>
          {/* <Avatar src="https://avatars2.githubusercontent.com/u/6184465?v=4" /> */}
          <Username>mydearxym</Username> 发布于 六天前 * 字数: 746
        </Desc>
      </PostBrief>
      <PostNumbers />
    </BannerContentWrapper>
  </BannerContainer>
)

export default PostBanner
