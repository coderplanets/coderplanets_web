import { FC, memo } from 'react'

import type { TAccount, TComment } from '@/spec'

import DotDivider from '@/components/DotDivider'
import { SpaceGrow } from '@/components/Common'
import EmotionSelector from '@/components/EmotionSelector'

import Actions from './Actions'

import { Wrapper } from '../styles/comment/footer'

type TProps = {
  data: TComment
}

const Footer: FC<TProps> = ({ data }) => (
  <Wrapper>
    <EmotionSelector emotions={data.emotions} />
    <DotDivider radius={3} space={10} />
    <Actions data={data} />
    <SpaceGrow />
  </Wrapper>
)

export default memo(Footer)
