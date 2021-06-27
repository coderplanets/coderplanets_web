import { FC, memo } from 'react'

import type { TAccount, TComment } from '@/spec'

import DotDivider from '@/components/DotDivider'
import { SpaceGrow } from '@/components/Common'

import Emotion from './Emotion'
import Actions from './Actions'

import { Wrapper } from '../styles/comment/footer'

type TProps = {
  data: TComment
  accountInfo: TAccount
  withoutBottomDivider?: boolean
  hasReplies?: boolean
}

const Footer: FC<TProps> = ({
  data,
  accountInfo,
  withoutBottomDivider = false,
  hasReplies = false,
}) => (
  <Wrapper withoutBottomDivider={withoutBottomDivider} hasReplies={hasReplies}>
    <Emotion />
    <DotDivider radius={3} space={10} />
    <Actions data={data} accountInfo={accountInfo} />
    <SpaceGrow />
  </Wrapper>
)

export default memo(Footer)
