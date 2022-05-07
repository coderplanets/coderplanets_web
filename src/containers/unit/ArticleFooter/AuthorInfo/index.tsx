/*
 *
 * AuthorInfo
 *
 */

import { FC, memo } from 'react'
import { isEmpty, pickBy } from 'ramda'

import type { TAccount } from '@/spec'
import { report, authWarn } from '@/utils/helper'
import { buildLog } from '@/utils/logger'

import { useAccount } from '@/hooks'
import FollowButton from '@/widgets/Buttons/FollowButton'
import ImgFallback from '@/widgets/ImgFallback'
import Tabs from '@/widgets/Switcher/Tabs'

import SocialList from './SocialList'

import {
  Wrapper,
  TabsWrapper,
  ReportWrapper,
  ContentWrapper,
  TextIntro,
  IntroTitle,
  Name,
  Bio,
  //
  AvatarIntro,
  Avatar,
} from '../styles/author_info'

import { onFollow, undoFollow } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('c:AuthorInfo:index')

type TProps = {
  testid?: string
  hasFollowedAuthor: boolean | null
  author: TAccount
}

export const TAB_ITEMS = [
  {
    title: '关于作者',
    raw: 'a',
  },
  {
    title: '日志',
    raw: 'b',
  },
  {
    title: '引用',
    raw: 'c',
  },
]

const AuthorInfo: FC<TProps> = ({
  testid = 'author-info',
  author,
  hasFollowedAuthor = null,
}) => {
  const accountInfo = useAccount()

  const socialItems = pickBy((v) => !!v, author.social) as Record<
    string,
    string
  >

  const hasFollowed =
    hasFollowedAuthor === null ? author.viewerHasFollowed : hasFollowedAuthor

  return (
    <Wrapper testid={testid}>
      <TabsWrapper>
        <Tabs
          items={TAB_ITEMS}
          size="small"
          activeKey="a"
          bottomSpace={5}
          onChange={(tab) => console.log(tab)}
        />
      </TabsWrapper>
      <ReportWrapper
        onClick={() => {
          if (!accountInfo) return authWarn()

          report('ARTICLE')
        }}
      >
        举报
      </ReportWrapper>
      <ContentWrapper>
        <TextIntro>
          <IntroTitle>关于作者</IntroTitle>
          <Name>
            {author.nickname}
            {!isEmpty(socialItems) && <SocialList items={socialItems} />}
          </Name>
          <Bio>{author.bio}</Bio>
        </TextIntro>
        <AvatarIntro>
          <Avatar
            src={author.avatar}
            fallback={<ImgFallback user={author} size={38} bottom={16} />}
          />
          <FollowButton
            size="tiny"
            followText="&nbsp;关 注&nbsp;"
            hasFollowed={hasFollowed}
            followingOffset={-10}
            userLogin={author.login}
            onFollow={onFollow}
            onUndoFollow={undoFollow}
          />
        </AvatarIntro>
      </ContentWrapper>
    </Wrapper>
  )
}

export default memo(AuthorInfo)
