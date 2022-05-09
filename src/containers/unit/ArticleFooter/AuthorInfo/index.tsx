/*
 *
 * AuthorInfo
 *
 */

import { FC, memo, useCallback } from 'react'

import type { TAccount } from '@/spec'
import { SVG } from '@/constant'
import { report, authWarn } from '@/utils/helper'
import { buildLog } from '@/utils/logger'

import { useAccount } from '@/hooks'
import ImgFallback from '@/widgets/ImgFallback'
import Tabs from '@/widgets/Switcher/Tabs'
import IconButton from '@/widgets/Buttons/IconButton'
import SocialList from '@/widgets/SocialList'
import MenuButton from '@/widgets/Buttons/MenuButton'

// import SocialList from './SocialList'

import {
  Wrapper,
  TabsWrapper,
  ReportWrapper,
  ContentWrapper,
  TextIntro,
  FromHint,
  Name,
  Bio,
  //
  AvatarIntro,
  Avatar,
} from '../styles/author_info'

// import { onFollow, undoFollow } from '../logic'

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

const menuOptions = [
  {
    key: 'report',
    icon: SVG.REPORT,
    title: '举报内容',
  },
]

const AuthorInfo: FC<TProps> = ({
  testid = 'author-info',
  author,
  hasFollowedAuthor = null,
}) => {
  const accountInfo = useAccount()

  const handleMenu = useCallback(
    (key) => {
      if (key === 'report') {
        if (!accountInfo) return authWarn()
        report('ARTICLE')
      }
    },
    [accountInfo],
  )

  // const socialItems = pickBy((v) => !!v, author.social) as Record<
  //   string,
  //   string
  // >

  // const hasFollowed =
  //   hasFollowedAuthor === null ? author.viewerHasFollowed : hasFollowedAuthor

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
      <ReportWrapper>
        <MenuButton options={menuOptions} onClick={(key) => handleMenu(key)}>
          <IconButton icon={SVG.MOREL_DOT} size={15} dimWhenIdle />
        </MenuButton>
      </ReportWrapper>
      <ContentWrapper>
        <TextIntro>
          <Name>
            {author.nickname}
            {/* {!isEmpty(socialItems) && <SocialList items={socialItems} />} */}
          </Name>
          <FromHint>来自 github / 成都</FromHint>
          <Bio>{author.bio}</Bio>
        </TextIntro>
        <AvatarIntro>
          <Avatar
            src={author.avatar}
            fallback={<ImgFallback user={author} size={38} bottom={16} />}
          />
          <SocialList />
        </AvatarIntro>
      </ContentWrapper>
    </Wrapper>
  )
}

export default memo(AuthorInfo)
