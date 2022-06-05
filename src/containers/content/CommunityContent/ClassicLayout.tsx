/*
 *
 * CommunityContent
 *
 */

import { FC, memo } from 'react'
import { includes } from 'ramda'
import { isMobile } from 'react-device-detect'

import type { TThread } from '@/spec'
import { ARTICLE_THREAD } from '@/constant'
import { buildLog } from '@/utils/logger'
import CommunityDigest from '@/containers/digest/CommunityDigest'

import ThreadContent from './ThreadContent'
import {
  Wrapper,
  InnerWrapper,
  ContentWrapper,
  MobileCardsWrapper,
} from './styles/classic_layout'

/* eslint-disable-next-line */
const log = buildLog('C:CommunityContent:ClassicView')

type TProps = {
  thread?: TThread
}

const ClassicLayout: FC<TProps> = ({ thread }) => {
  const isMobileCardsView =
    isMobile && includes(thread, [ARTICLE_THREAD.JOB, ARTICLE_THREAD.RADAR])

  return (
    <Wrapper testid="community-content">
      <CommunityDigest />
      {isMobileCardsView ? (
        <MobileCardsWrapper>
          <ContentWrapper>
            <ThreadContent thread={thread} />
          </ContentWrapper>
        </MobileCardsWrapper>
      ) : (
        <InnerWrapper>
          <ContentWrapper>
            <ThreadContent thread={thread} />
          </ContentWrapper>
        </InnerWrapper>
      )}
    </Wrapper>
  )
}

export default memo(ClassicLayout)
