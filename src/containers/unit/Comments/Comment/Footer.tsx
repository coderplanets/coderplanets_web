import React from 'react'

import type { TAccount, TComment } from '@/spec'

import DotDivider from '@/components/DotDivider'
import { SpaceGrow } from '@/components/Common'

import Emotion from './Emotion'
import Actions from './Actions'

import { Wrapper } from '../styles/comment/footer'

type TProps = {
  data: TComment
  accountInfo: TAccount
}

const Footer: React.FC<TProps> = ({ data, accountInfo }) => (
  <Wrapper>
    <Emotion />
    <DotDivider radius={3} space={6} />
    <Actions data={data} accountInfo={accountInfo} />
    <SpaceGrow />
  </Wrapper>
)

export default React.memo(Footer)
