/*
 *
 * CommunityStatesPad
 *
 */

import { FC, memo } from 'react'

import type { TCommunity } from '@/spec'
import usePlatform from '@/hooks/usePlatform'
import { buildLog } from '@/utils/logger'
import { getRandomInt } from '@/utils/helper'
import Tooltip from '@/widgets/Tooltip'

import Charger from '@/widgets/Charger'

import NumberGroup from './NumberGroup'
import {
  Wrapper,
  NumberSection,
  ContentSection,
  VolunteerSection,
  ChargeSection,
  NumberDivider,
  NumberTitle,
  PopHint,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:CommunityStatesPad:index')

type TProps = {
  community: TCommunity
  realtimeVisitors?: number
  withoutFounding?: boolean
  onShowEditorList?: () => void
  onShowSubscriberList?: () => void
}

const CommunityStatesPad: FC<TProps> = ({
  community,
  realtimeVisitors = 1,
  onShowEditorList = log,
  onShowSubscriberList = log,
  withoutFounding = true,
}) => {
  const { editorsCount, subscribersCount, articlesCount } = community
  const { isMobile } = usePlatform()

  return (
    <Wrapper>
      <NumberSection>
        {!isMobile && <NumberTitle>成员</NumberTitle>}
        <Tooltip
          content={
            <PopHint>
              实时在线人数，后续会单独统计每个子社区的实时在线人数。
            </PopHint>
          }
          placement="bottom"
        >
          <NumberGroup
            count={subscribersCount}
            subCount={realtimeVisitors}
            onClick={onShowSubscriberList}
            contributesDigest={community.contributesDigest}
            subPrefix="online"
          />
        </Tooltip>
      </NumberSection>
      <NumberDivider />
      <ContentSection>
        <NumberTitle readOnly>内容</NumberTitle>
        <NumberGroup
          subPrefix="contributes"
          count={articlesCount}
          subCount={getRandomInt(1, 8)}
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

export default memo(CommunityStatesPad)
