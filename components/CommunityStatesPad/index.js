/*
 *
 * CommunityStatesPad
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import SubscribedTitle from './SubscribedTitle'

import {
  Wrapper,
  NumberSection,
  NumberDivider,
  NumberTitle,
  NumberItem,
} from './styles'

import { makeDebugger, prettyNum } from '../../utils'

/* eslint-disable-next-line */
const debug = makeDebugger('c:CommunityStatesPad:index')

const CommunityStatesPad = ({
  community,
  onSubscribe,
  onUndoSubscribe,
  onShowEditorList,
  onShowSubscriberList,
}) => {
  const {
    editorsCount,
    subscribersCount,
    postsCount,
    videosCount,
    reposCount,
    jobsCount,
    viewerHasSubscribed,
  } = community
  const contentsCount = postsCount + videosCount + reposCount + jobsCount

  return (
    <Wrapper>
      <NumberSection active={viewerHasSubscribed}>
        <SubscribedTitle
          community={community}
          onSubscribe={onSubscribe}
          onUndoSubscribe={onUndoSubscribe}
        />
        <NumberItem onClick={onShowSubscriberList}>
          {prettyNum(subscribersCount)}
        </NumberItem>
      </NumberSection>
      <NumberDivider />
      <NumberSection readOnly>
        <NumberTitle readOnly>内容</NumberTitle>
        <NumberItem readOnly>{prettyNum(contentsCount)}</NumberItem>
      </NumberSection>
      <NumberDivider />
      <NumberSection>
        <NumberTitle readOnly>编辑</NumberTitle>
        <NumberItem onClick={onShowEditorList}>
          {prettyNum(editorsCount)}
        </NumberItem>
      </NumberSection>
    </Wrapper>
  )
}

CommunityStatesPad.propTypes = {
  community: PropTypes.shape({
    subscribersCount: PropTypes.number,
    editorsCount: PropTypes.number,
    postsCount: PropTypes.number,
    videosCount: PropTypes.number,
    reposCount: PropTypes.number,
    jobsCount: PropTypes.number,
    viewerHasSubscribed: PropTypes.bool,
  }),
  onSubscribe: PropTypes.func,
  onUndoSubscribe: PropTypes.func,
  onShowEditorList: PropTypes.func,
  onShowSubscriberList: PropTypes.func,
}

CommunityStatesPad.defaultProps = {
  community: {
    subscribersCount: 0,
    editorsCount: 0,
    postsCount: 0,
    videosCount: 0,
    reposCount: 0,
    jobsCount: 0,
    viewerHasSubscribed: false,
  },
  onSubscribe: debug,
  onUndoSubscribe: debug,
  onShowEditorList: debug,
  onShowSubscriberList: debug,
}

export default React.memo(CommunityStatesPad)
