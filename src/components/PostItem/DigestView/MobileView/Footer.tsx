import React, { FC } from 'react'

import type { TPost } from '@/spec'
import { cutRest } from '@/utils'
import { ICON_CMD } from '@/config'

import DotDivider from '@/components/DotDivider'

import {
  Wrapper,
  CommunityInfo,
  Extra,
  ExtraIcon,
  ExtraTexts,
  BodyDigest,
} from '../../styles/mobile_view/footer'

type TProps = {
  item: TPost
}

const Footer: FC<TProps> = ({ item }) => {
  return (
    <Wrapper>
      <Extra>
        <CommunityInfo>React</CommunityInfo>
        <DotDivider radius={3} space={6} />
        <ExtraTexts>
          <ExtraIcon src={`${ICON_CMD}/view_solid.svg`} />
          {item.views}
          <DotDivider radius={3} space={6} />
          <ExtraIcon src={`${ICON_CMD}/comment_solid.svg`} />
          {item.commentsCount}
        </ExtraTexts>
      </Extra>
      <BodyDigest>{cutRest(item.digest, 20)}</BodyDigest>
    </Wrapper>
  )
}

export default Footer
