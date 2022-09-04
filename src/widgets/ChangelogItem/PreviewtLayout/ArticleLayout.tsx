/*
 *
 * ChangelogItem
 *
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils/logger'

import { TAG_MODE } from '@/constant'

import { SpaceGrow } from '@/widgets/Common'
import TagsList from '@/widgets/TagsList'
import CoverImage from '@/widgets/CoverImage'
import EmotionSelector from '@/widgets/EmotionSelector'

import { demoTags, demoEmotion } from '../constant'
import BonusButton from './BonusButton'

import {
  Wrapper,
  Main,
  Title,
  TagsWrapper,
  Body,
  Footer,
  Version,
  DateTime,
  CommentWrapper,
  CommentIcon,
  Text,
} from '../styles/preview_layout/article_layout'

/* eslint-disable-next-line */
const log = buildLog('w:ChangelogItem:index')

type TProps = {
  testid?: string
}

const PreviewLayout: FC<TProps> = ({ testid = 'changelog-item' }) => {
  return (
    <Wrapper testid={testid}>
      <Main>
        <CoverImage />
        <Title>
          <span>帖子支持表情了</span>
          <Version>v3.20</Version>
        </Title>
        <TagsWrapper>
          <TagsList
            items={demoTags}
            left={3}
            mode={TAG_MODE.LABEL}
            size="small"
            max={5}
          />
          <DateTime>10天前</DateTime>
        </TagsWrapper>
        <Body>
          这次俄乌冲突出现侮辱乌女性的评论就是1450干的，刷完评论就截图转发外网，成为外媒攻击中国人的“口实”。
          这种行为十分危险，战争期间各种武装组织骚动，随时对我国在乌克兰撤侨的6000人直接造成生命威胁。前段时间，刘学州那个找爸妈的孩子，也是被1450它们网暴死的。
          （1450罪恶滔天啊！1450是九世恶人下凡！连孩子都不放过。
        </Body>
        <Footer>
          <EmotionSelector emotions={demoEmotion} isLegal />
          <CommentWrapper>
            <CommentIcon />
            <Text>23</Text>
          </CommentWrapper>
          <SpaceGrow />
          <BonusButton top={-3} />
        </Footer>
      </Main>
    </Wrapper>
  )
}

export default memo(PreviewLayout)
