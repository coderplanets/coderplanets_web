import { FC, memo } from 'react'

import type { TComment } from '@/spec'
import useAccount from '@/hooks/useAccount'

import { authWarn } from '@/utils/helper'

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
  const accountInfo = useAccount()
  const { isLegal } = data.meta

  return (
    <Wrapper>
      <EmotionSelector
        isLegal={isLegal}
        emotions={data.emotions}
        onAction={(name, hasEmotioned) => {
          if (!accountInfo) return authWarn()
          handleEmotion(data, name, hasEmotioned)
        }}
      />
      {apiMode === API_MODE.ARTICLE && isLegal && (
        <DotDivider radius={3} space={10} />
      )}
      {apiMode === API_MODE.ARTICLE && <Actions data={data} />}
      <SpaceGrow />
    </Wrapper>
  )
}

export default memo(Footer)
