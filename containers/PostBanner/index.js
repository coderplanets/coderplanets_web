import React from 'react'
import R from 'ramda'
import { inject, observer } from 'mobx-react'
import TimeAgo from 'timeago-react'

import { makeDebugger, storePlug, prettyNum } from '../../utils'

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

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:PostBanner')
/* eslint-enable no-unused-vars */

const PostNumbers = ({ data: { views, favoritedCount, starredCount } }) => (
  <NumbersInfo>
    <NumberSection dead>
      <NumberTitle dead>阅读</NumberTitle>
      <NumberItem dead>{prettyNum(views)}</NumberItem>
    </NumberSection>
    <NumberDivider />
    <NumberSection>
      <NumberTitle>喜欢</NumberTitle>
      <NumberItem>{prettyNum(starredCount)}</NumberItem>
    </NumberSection>
    <NumberDivider />
    <NumberSection>
      <NumberTitle>收藏</NumberTitle>
      <NumberItem>{prettyNum(favoritedCount)}</NumberItem>
    </NumberSection>
    <NumberDivider />
    <NumberSection>
      <NumberTitle>关注</NumberTitle>
      <NumberItem>TD</NumberItem>
    </NumberSection>
  </NumbersInfo>
)

class PostBannerContainer extends React.Component {
  componentWillMount() {
    const { postBanner } = this.props
    logic.init(postBanner)
  }

  render() {
    const {
      postBanner: { postData },
    } = this.props

    return (
      <BannerContainer>
        {R.isNil(postData.id) ? null : (
          <BannerContentWrapper>
            <PostBrief>
              <Title>{postData.title}</Title>
              <Desc>
                <PrintTag>转载</PrintTag>
                {/* <Avatar src="https://avatars2.githubusercontent.com/u/6184465?v=4" /> */}
                <Username>{postData.author.nickname}</Username> 发布于{' '}
                <TimeAgo datetime={postData.insertedAt} locale="zh_CN" /> *
                字数: {postData.length}
              </Desc>
            </PostBrief>
            <PostNumbers data={postData} />
          </BannerContentWrapper>
        )}
      </BannerContainer>
    )
  }
}

export default inject(storePlug('postBanner'))(observer(PostBannerContainer))
