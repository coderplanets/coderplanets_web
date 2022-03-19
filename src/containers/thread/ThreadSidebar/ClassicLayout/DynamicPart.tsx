/*
 *
 * ClassicSidebar
 * common sidebar include community badge, publisher, tagsbar ads .. etc,
 * used for classic layout
 *
 */

import { FC, Fragment, memo } from 'react'

import type { TThread, TCommunity } from '@/spec'

import { buildLog } from '@/utils/logger'
import { send } from '@/utils/helper'
import { mockUsers } from '@/utils/mock'
import { EVENT } from '@/constant'

import Sticky from '@/widgets/Sticky'
import { SpaceGrow } from '@/widgets/Common'
// import FiltersMenu from '@/widgets/FiltersMenu'
import PublishButton from '@/widgets/Buttons/PublishButton'
import CommunityJoinBadge from '@/containers/tool/CommunityJoinBadge'
import TagsBar from '@/containers/unit/TagsBar'
// import PromotionList from '@/widgets/PromotionList'

import {
  NoteWrapper,
  TagsBarWrapper,
  StickyWrapper,
  CommunityJoinersTitle,
  CommunityJoinersNum,
  CommunityJoinersWrapper,
  JoinerAvatar,
  CommunityNoteWrapper,
  PublishWrapper,
} from '../styles/classic_layout'

/* eslint-disable-next-line */
const log = buildLog('c:ClassicSidebar')

export type TProps = {
  showCommunityBadge: boolean
  thread: TThread
  community: TCommunity
}

const ClassicLayout: FC<TProps> = ({
  community,
  thread,
  showCommunityBadge,
}) => {
  return (
    <Sticky offsetTop={50}>
      <Fragment>
        {showCommunityBadge && (
          <CommunityJoinersTitle>
            参与者
            <CommunityJoinersNum>3829</CommunityJoinersNum>
          </CommunityJoinersTitle>
        )}

        <CommunityJoinersWrapper show={showCommunityBadge}>
          {mockUsers(5).map((user) => (
            <JoinerAvatar key={user.id} src={user.avatar} noLazy />
          ))}
        </CommunityJoinersWrapper>
        {showCommunityBadge && (
          <CommunityNoteWrapper>
            关于 CoderPlanets 的各种建议，吐槽等请发布到这里 关于 CoderPlanets
            的各种建议，吐槽等请发布到这里
          </CommunityNoteWrapper>
        )}
      </Fragment>

      <StickyWrapper>
        <PublishWrapper show={showCommunityBadge}>
          {community.raw !== 'blackhole' ? (
            <PublishButton thread={thread} community={community.raw} />
          ) : (
            <NoteWrapper>
              这里的内容将不会被开放给搜索引擎，只进不出。如果有异议，可联系志愿者移出。
            </NoteWrapper>
          )}
        </PublishWrapper>

        {!showCommunityBadge && <CommunityJoinBadge />}
        <TagsBarWrapper>
          <TagsBar onSelect={() => send(EVENT.REFRESH_ARTICLES)} />
        </TagsBarWrapper>
        <SpaceGrow />
      </StickyWrapper>
    </Sticky>
  )
}

export default memo(ClassicLayout)
