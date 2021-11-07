import { FC, memo } from 'react'

import type { TComment } from '@/spec'

import DotDivider from '@/widgets/DotDivider'
import { SpaceGrow } from '@/widgets/Common'
import EmotionSelector from '@/widgets/EmotionSelector'

import Actions from './Actions'

import type { TAPIMode } from '../spec'
import { API_MODE } from '../constant'
import { Wrapper } from '../styles/comment/footer'
import { handleEmotion } from '../logic'

type TProps = {
  data: TComment
  apiMode: TAPIMode
}

const Footer: FC<TProps> = ({ data, apiMode }) => {
  return (
    <Wrapper>
      <EmotionSelector
        emotions={data.emotions}
        onAction={(name, hasEmotioned) =>
          handleEmotion(data, name, hasEmotioned)
        }
      />
      {apiMode === API_MODE.ARTICLE && <DotDivider radius={3} space={10} />}
      {apiMode === API_MODE.ARTICLE && <Actions data={data} />}
      <SpaceGrow />
    </Wrapper>
  )
}

export default memo(Footer)
