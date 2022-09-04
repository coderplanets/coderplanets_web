/*
 *
 * ContentBanner
 *
 */

import React from 'react'
import T from 'prop-types'
import { contains, pluck, isNil, isEmpty } from 'ramda'
import TimeAgo from 'timeago-react'

import { buildLog } from '@/utils/logger'
import DotDivider from '@/widgets/DotDivider'

import {
  BannerContainer,
  BannerContentWrapper,
  PostBrief,
  Title,
  Desc,
  MarkTag,
} from './styles'

import ReactionNumbers from './ReactionNumbers'

/* eslint-disable-next-line */
const log = buildLog('w:ContentBanner:index')

// TODO: add a Loading effect
const ContentBanner = ({ data, middleNode }) => {
  const isRefined = contains('refined', pluck('title', data.tags))

  return (
    <BannerContainer>
      {!isNil(data.id) && (
        <BannerContentWrapper>
          <PostBrief>
            <Title>{data.title}</Title>
            <>{!isEmpty(middleNode) && <div>{middleNode}</div>}</>
            <Desc>
              {isRefined ? <MarkTag>精华</MarkTag> : <div />}
              <TimeAgo datetime={data.insertedAt} locale="zh_CN" />
              <DotDivider />
              字数: {data.length}
            </Desc>
          </PostBrief>
          <ReactionNumbers data={data} />
        </BannerContentWrapper>
      )}
    </BannerContainer>
  )
}

ContentBanner.propTypes = {
  data: T.shape({
    id: T.string,
    title: T.string,
    insertedAt: T.string,
    updatedAt: T.string,
    views: T.number,
    collectsCount: T.number,
    upvotesCount: T.number,
    viewerHasCollected: T.bool,
    viewerHasUpvoted: T.bool,
    length: T.bool,
    tags: T.object,
  }),
  middleNode: T.oneOfType([T.string, T.node]),
}

ContentBanner.defaultProps = {
  data: {
    id: '',
    title: '',
    views: 0,
    collectsCount: -1,
    upvotesCount: -1,
    viewerHasCollected: false,
    viewerHasUpvoted: false,
  },
  middleNode: '',
}

export default React.memo(ContentBanner)
