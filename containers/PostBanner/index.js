import React from 'react'
import R from 'ramda'
import { inject, observer } from 'mobx-react'
import TimeAgo from 'timeago-react'

import { DotDivider } from '../../components'

import {
  BannerContainer,
  BannerContentWrapper,
  PostBrief,
  Title,
  Desc,
  MarkTag,
} from './styles'

import ReactionNumbers from './ReactionNumbers'

import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:PostBanner')
/* eslint-enable no-unused-vars */

class PostBannerContainer extends React.Component {
  componentWillMount() {
    const { postBanner } = this.props
    logic.init(postBanner)
  }

  render() {
    const { postBanner } = this.props
    const { viewingPostData } = postBanner

    return (
      <BannerContainer>
        {R.isNil(viewingPostData.id) ? null : (
          <BannerContentWrapper>
            <PostBrief>
              <Title>{viewingPostData.title}</Title>
              <Desc>
                <MarkTag>精华帖</MarkTag>
                <TimeAgo datetime={viewingPostData.insertedAt} locale="zh_CN" />
                <DotDivider />
                字数: {viewingPostData.length}
              </Desc>
            </PostBrief>
            <ReactionNumbers data={viewingPostData} />
          </BannerContentWrapper>
        )}
      </BannerContainer>
    )
  }
}

export default inject(storePlug('postBanner'))(observer(PostBannerContainer))
