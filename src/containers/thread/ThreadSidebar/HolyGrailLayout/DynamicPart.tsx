import { FC, Fragment, memo } from 'react'

import { Br } from '@/components/Common'
import Sticky from '@/components/Sticky'
import TagsBar from '@/containers/unit/TagsBar'
import { PublishButton } from '@/components/Buttons'

import ExtraInfo from './ExtraInfo'

// 没有各种外链接，打赏信息等的官方社区

const DynamicPart: FC = () => {
  return (
    <Fragment>
      <ExtraInfo />
      <Br bottom={20} />
      <PublishButton />
      <Br bottom={25} />
      <Sticky offsetTop={80}>
        <TagsBar onSelect={console.log} />
      </Sticky>
    </Fragment>
  )
}

export default memo(DynamicPart)
