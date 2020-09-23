import React from 'react'

import { cutFrom } from '@/utils'
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

const Footer = ({ item }) => {
  return (
    <Wrapper>
      <Extra>
        <CommunityInfo>React</CommunityInfo>
        <DotDivider radius="3px" space="6px" />
        <ExtraTexts>
          <ExtraIcon src={`${ICON_CMD}/view_solid.svg`} />
          {item.views}
          <DotDivider radius="3px" space="6px" />
          <ExtraIcon src={`${ICON_CMD}/comment_solid.svg`} />
          {item.commentsCount}
        </ExtraTexts>
      </Extra>
      <BodyDigest>{cutFrom(item.digest, 20)}</BodyDigest>
    </Wrapper>
  )
}

export default Footer
