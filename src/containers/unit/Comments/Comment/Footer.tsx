import { FC, memo } from 'react'

import type { TAccount, TComment } from '@/spec'

import DotDivider from '@/components/DotDivider'
import { SpaceGrow } from '@/components/Common'
import EmotionSelector from '@/components/EmotionSelector'

import Actions from './Actions'

import { Wrapper } from '../styles/comment/footer'

type TProps = {
  data: TComment
  accountInfo: TAccount
}

const Footer: FC<TProps> = ({ data, accountInfo }) => (
  <Wrapper>
    <EmotionSelector emotions={data.emotions} />
    <DotDivider radius={3} space={10} />
    <Actions data={data} accountInfo={accountInfo} />
    <SpaceGrow />
  </Wrapper>
)

export default memo(Footer)
