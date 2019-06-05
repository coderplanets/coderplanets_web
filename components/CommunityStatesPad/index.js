/*
 *
 * CommunityStatesPad
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { buildLog, prettyNum } from '@utils'
import SubscribedTitle from './SubscribedTitle'

import {
  Wrapper,
  NumberSection,
  ContentSection,
  EditorSection,
  NumberDivider,
  NumberTitle,
  NumberItem,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:CommunityStatesPad:index')

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
      <ContentSection readOnly>
        <NumberTitle readOnly>内容</NumberTitle>
        <NumberItem readOnly>{prettyNum(contentsCount)}</NumberItem>
      </ContentSection>
      <NumberDivider />
      <EditorSection>
        <NumberTitle readOnly>编辑</NumberTitle>
        <NumberItem onClick={onShowEditorList}>
          {prettyNum(editorsCount)}
        </NumberItem>
      </EditorSection>
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
  onSubscribe: log,
  onUndoSubscribe: log,
  onShowEditorList: log,
  onShowSubscriberList: log,
}

export default React.memo(CommunityStatesPad)
