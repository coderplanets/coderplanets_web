/*
 *
 * CommunityStatesPad
 *
 */

import { FC, memo } from 'react'

import type { TCommunity } from '@/spec'
import { buildLog } from '@/utils/logger'

import SubscribeStatus from './SubscribeStatus'
import ContentStatus from './ContentStatus'
import VolunteerStatus from './VolunteerStatus'

import {
  Wrapper,
  NumberSection,
  ContentSection,
  VolunteerSection,
  NumberDivider,
  NumberTitle,
} from './styles/modeline_view'

/* eslint-disable-next-line */
const log = buildLog('w:CommunityStatesPad:index')

type TProps = {
  community: TCommunity
  realtimeVisitors?: number
  onShowEditorList?: () => void
  onShowSubscriberList?: () => void
}

const CommunityStatesPad: FC<TProps> = ({
  community,
  realtimeVisitors = 1,
  onShowEditorList = log,
  onShowSubscriberList = log,
}) => {
  const { editorsCount, subscribersCount, contributesDigest, articlesCount } =
    community

  return (
    <Wrapper>
      <NumberSection>
        <NumberTitle>成员</NumberTitle>
        <SubscribeStatus
          count={subscribersCount}
          subCount={realtimeVisitors}
          onClick={onShowSubscriberList}
        />
      </NumberSection>
      <NumberDivider />
      <ContentSection>
        <NumberTitle readOnly>内容</NumberTitle>
        <ContentStatus
          count={articlesCount}
          contributesDigest={contributesDigest}
        />
      </ContentSection>

      <NumberDivider />

      <VolunteerSection alignCenter={editorsCount < 99}>
        <NumberTitle readOnly>志愿者</NumberTitle>
        <VolunteerStatus count={editorsCount} onClick={onShowEditorList} />
      </VolunteerSection>
    </Wrapper>
  )
}

export default memo(CommunityStatesPad)
