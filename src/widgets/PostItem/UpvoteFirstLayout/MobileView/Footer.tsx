import { FC } from 'react'

import type { TPost, TCommunity } from '@/spec'
import { cutRest, changeToCommunity } from '@/utils/helper'
import { ICON_CMD } from '@/config'

import DotDivider from '@/widgets/DotDivider'

import {
  Wrapper,
  CommunityLabel,
  Extra,
  ExtraIcon,
  ExtraTexts,
  BodyDigest,
} from '../../styles/comment_fist_layout/mobile_view/footer'

type TProps = {
  item: TPost
  curCommunity: TCommunity
}

const Footer: FC<TProps> = ({ item, curCommunity }) => {
  const { originalCommunity } = item
  const showOriginalCommunity =
    curCommunity === null || curCommunity?.raw !== originalCommunity.raw

  return (
    <Wrapper>
      <Extra>
        {showOriginalCommunity && (
          <CommunityLabel
            onClick={() => changeToCommunity(originalCommunity.raw)}
          >
            {originalCommunity.title}
          </CommunityLabel>
        )}

        {showOriginalCommunity && <DotDivider radius={3} space={6} />}

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
