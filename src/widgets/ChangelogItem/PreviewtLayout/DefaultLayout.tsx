/*
 *
 * ChangelogItem
 *
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils/logger'

import { SIZE, TAG_MODE } from '@/constant'

import { SpaceGrow } from '@/widgets/Common'
import DropdownButton from '@/widgets/Buttons/DropdownButton'
import TagsList from '@/widgets/TagsList'
import CoverImage from '@/widgets/CoverImage'
import EmotionSelector from '@/widgets/EmotionSelector'

import BonusButton from './BonusButton'

import {
  Wrapper,
  Main,
  Side,
  Title,
  TagsWrapper,
  Body,
  Footer,
  Version,
  DateTime,
  CommentWrapper,
  CommentIcon,
  Text,
} from '../styles/preview_layout/default_layout'

/* eslint-disable-next-line */
const log = buildLog('c:ChangelogItem:index')

type TProps = {
  testid?: string
}

const PreviewLayout: FC<TProps> = ({ testid = 'changelog-item' }) => {
  const tags = [
    {
      title: 'Bug 修复',
      raw: 'fix',
      color: 'red',
    },
    {
      title: '新功能',
      raw: 'feature',
      color: 'blue',
    },
  ]

  const emotion = {
    beerCount: 2,
    confusedCount: 0,
    downvoteCount: 0,
    heartCount: 0,
    latestBeerUsers: [
      {
        login: 'porter172',
        nickname: 'Immanuel172',
        bio: null,
        shortbio: null,
        avatar: null,
      },
      {
        login: 'cp_bot',
        nickname: 'botman',
        bio: null,
        shortbio: null,
        avatar: null,
      },
    ],
    latestConfusedUsers: [],
    latestDownvoteUsers: [],
    latestHeartUsers: [],
    latestPillUsers: [],
    length: 2,
    latestPopcornUsers: [],
    pillCount: 0,
    popcornCount: 0,
    viewerHasBeered: false,
    viewerHasConfuseded: false,
    viewerHasDownvoteed: false,
    viewerHasHearted: false,
    viewerHasPilled: false,
    viewerHasPopcorned: false,
  }

  return (
    <Wrapper testid={testid}>
      <Main>
        <CoverImage />
        <Title>帖子支持表情了</Title>
        <TagsWrapper>
          <TagsList
            items={tags}
            left={3}
            mode={TAG_MODE.LABEL}
            size="small"
            max={5}
          />
        </TagsWrapper>
        <Body>
          这次俄乌冲突出现侮辱乌女性的评论就是1450干的，刷完评论就截图转发外网，成为外媒攻击中国人的“口实”。
          这种行为十分危险，战争期间各种武装组织骚动，随时对我国在乌克兰撤侨的6000人直接造成生命威胁。前段时间，刘学州那个找爸妈的孩子，也是被1450它们网暴死的。
          （1450罪恶滔天啊！1450是九世恶人下凡！连孩子都不放过。
        </Body>
        <Footer>
          <EmotionSelector emotions={emotion} isLegal />
          <CommentWrapper>
            <CommentIcon />
            <Text>23</Text>
          </CommentWrapper>
          <SpaceGrow />
          <BonusButton top={-8} right={2} />
        </Footer>
      </Main>
      <Side>
        <Version>v3.20</Version>
        <DateTime>10天前</DateTime>
        <DropdownButton size={SIZE.TINY} top={5} right={-8} withBorder>
          获取
        </DropdownButton>
      </Side>
    </Wrapper>
  )
}

export default memo(PreviewLayout)