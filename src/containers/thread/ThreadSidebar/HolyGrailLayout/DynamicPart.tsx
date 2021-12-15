import { FC, Fragment, memo } from 'react'

import { send } from '@/utils/helper'
import { EVENT } from '@/constant'

import { Br } from '@/widgets/Common'
import Sticky from '@/widgets/Sticky'
import TagsBar from '@/containers/unit/TagsBar'
import PublishButton from '@/widgets/Buttons/PublishButton'

import type { TProps } from './index'
// import ExtraInfo from './ExtraInfo'

// 没有各种外链接，打赏信息等的官方社区

const DynamicPart: FC<TProps> = ({ thread, community }) => {
  return (
    <Fragment>
      {/* <ExtraInfo /> */}
      <Br bottom={20} />
      <PublishButton thread={thread} community={community.raw} />
      <Br bottom={25} />
      <Sticky offsetTop={80}>
        <TagsBar onSelect={() => send(EVENT.REFRESH_ARTICLES)} />
      </Sticky>
    </Fragment>
  )
}

export default memo(DynamicPart)
