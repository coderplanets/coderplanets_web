import React from 'react'
import { inject, observer } from 'mobx-react'

import { storePlug, prettyNum } from '../../utils'

import {
  NumbersInfo,
  NumberSection,
  NumberDivider,
  NumberTitle,
  NumberItem,
  BannerContainer,
  BannerContentWrapper,
  PostBrief,
  Title,
  Desc,
  PrintTag,
  Username,
} from './styles'

import * as logic from './logic'

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

class PostBannerContainer extends React.Component {
  componentWillMount() {
    logic.init(this.props.postBanner)
  }

  render() {
    return (
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
  }
}

export default inject(storePlug('postBanner'))(observer(PostBannerContainer))
