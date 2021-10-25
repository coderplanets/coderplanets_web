import { FC, memo } from 'react'

import type { TComment } from '@/spec'

import DotDivider from '@/widgets/DotDivider'
import { SpaceGrow } from '@/widgets/Common'
import EmotionSelector from '@/widgets/EmotionSelector'

import Actions from './Actions'

import { Wrapper } from '../styles/comment/footer'
import { handleEmotion } from '../logic'

type TProps = {
  data: TComment
}

const Footer: FC<TProps> = ({ data }) => {
  return (
    <Wrapper>
      <EmotionSelector
        emotions={data.emotions}
        onAction={(name, hasEmotioned) =>
          handleEmotion(data, name, hasEmotioned)
        }
      />
      <DotDivider radius={3} space={10} />
      <Actions data={data} />
      <SpaceGrow />
    </Wrapper>
  )
}

export default memo(Footer)
