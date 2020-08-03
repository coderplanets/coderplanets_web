/*
 *
 * CommunityStatesPad
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@/utils'

import Charger from '@/components/Charger'
import SubscribedTitle from './SubscribedTitle'
import NumberGroup from './NumberGroup'

import {
  Wrapper,
  NumberSection,
  ContentSection,
  EditorSection,
  ChargeSection,
  NumberDivider,
  NumberTitle,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:CommunityStatesPad:index')

const CommunityStatesPad = ({
  community,
  onSubscribe,
  onUndoSubscribe,
  onShowEditorList,
  onShowSubscriberList,
  withoutFounding,
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
        <NumberGroup
          count={subscribersCount}
          subCount={12}
          onClick={onShowSubscriberList}
          subPrefix="online"
        />
      </NumberSection>
      <NumberDivider />
      <ContentSection readOnly>
        <NumberTitle readOnly>内容</NumberTitle>
        <NumberGroup
          subPrefix="add"
          count={contentsCount}
          subCount={4}
          readOnly
        />
      </ContentSection>
      <NumberDivider />
      <EditorSection>
        <NumberTitle readOnly>编辑</NumberTitle>
        <NumberGroup onClick={onShowEditorList} count={editorsCount} />
      </EditorSection>
      {!withoutFounding && (
        <>
          <NumberDivider />
          <ChargeSection>
            <NumberTitle>打赏</NumberTitle>
            <Charger />
          </ChargeSection>
        </>
      )}
    </Wrapper>
  )
}

CommunityStatesPad.propTypes = {
  community: T.shape({
    subscribersCount: T.number,
    editorsCount: T.number,
    postsCount: T.number,
    videosCount: T.number,
    reposCount: T.number,
    jobsCount: T.number,
    viewerHasSubscribed: T.bool,
  }),
  onSubscribe: T.func,
  onUndoSubscribe: T.func,
  onShowEditorList: T.func,
  onShowSubscriberList: T.func,
  withoutFounding: T.bool,
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
  withoutFounding: true,
}

export default React.memo(CommunityStatesPad)
