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
  article: TPost
  curCommunity: TCommunity
}

const Footer: FC<TProps> = ({ article, curCommunity }) => {
  const { originalCommunity } = article
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
          {article.views}
          <DotDivider radius={3} space={6} />
          <ExtraIcon src={`${ICON_CMD}/comment_solid.svg`} />
          {article.commentsCount}
        </ExtraTexts>
      </Extra>
      <BodyDigest>{cutRest(article.digest, 20)}</BodyDigest>
    </Wrapper>
  )
}

export default Footer
