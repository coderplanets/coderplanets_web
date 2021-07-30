/*
 *
 * CommunityStatesPad
 *
 */

import React from 'react'
import T from 'prop-types'

import { isMobile } from 'react-device-detect'
import { buildLog } from '@/utils'

import Charger from '@/components/Charger'
import NumberGroup from './NumberGroup'

import {
  Wrapper,
  NumberSection,
  ContentSection,
  VolunteerSection,
  ChargeSection,
  NumberDivider,
  NumberTitle,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:CommunityStatesPad:index')

const CommunityStatesPad = ({
  community,
  onShowEditorList,
  onShowSubscriberList,
  withoutFounding,
}) => {
  const {
    editorsCount,
    subscribersCount,
    postsCount,
    reposCount,
    jobsCount,
    viewerHasSubscribed,
  } = community
  const contentsCount = postsCount + reposCount + jobsCount

  return (
    <Wrapper>
      <NumberSection active={viewerHasSubscribed}>
        {!isMobile && <NumberTitle>成员</NumberTitle>}
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
      <VolunteerSection alignCenter={editorsCount < 99}>
        <NumberTitle readOnly>志愿者</NumberTitle>
        <NumberGroup onClick={onShowEditorList} count={editorsCount} />
      </VolunteerSection>
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
    reposCount: T.number,
    jobsCount: T.number,
    viewerHasSubscribed: T.bool,
  }),
  onShowEditorList: T.func,
  onShowSubscriberList: T.func,
  withoutFounding: T.bool,
}

CommunityStatesPad.defaultProps = {
  community: {
    subscribersCount: 0,
    editorsCount: 0,
    postsCount: 0,
    reposCount: 0,
    jobsCount: 0,
    viewerHasSubscribed: false,
  },
  onShowEditorList: log,
  onShowSubscriberList: log,
  withoutFounding: true,
}

export default React.memo(CommunityStatesPad)
