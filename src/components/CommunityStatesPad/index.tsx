/*
 *
 * CommunityStatesPad
 *
 */

import { FC, memo } from 'react'

import type { TCommunity } from '@/spec'
import usePlatform from '@/hooks/usePlatform'
import { buildLog } from '@/utils/logger'

import Charger from '@/components/Charger'

import NumberGroup from './NumberGroup'
import { getContentCount } from './helper'
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

type TProps = {
  community: TCommunity
  withoutFounding?: boolean
  onShowEditorList?: () => void
  onShowSubscriberList?: () => void
}

const CommunityStatesPad: FC<TProps> = ({
  community,
  onShowEditorList = log,
  onShowSubscriberList = log,
  withoutFounding = true,
}) => {
  const { editorsCount, subscribersCount } = community
  const { isMobile } = usePlatform()
  const contentsCount = getContentCount(community)

  return (
    <Wrapper>
      <NumberSection>
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

export default memo(CommunityStatesPad)
