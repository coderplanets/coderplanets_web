/*
 *
 * ChangelogItem
 *
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils/logger'
import TagsList from '@/widgets/TagsList'
import { TAG_MODE } from '@/constant'

import {
  Wrapper,
  Main,
  Side,
  Title,
  TagsWrapper,
  Body,
  Version,
  DateTime,
  // Download,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:ChangelogItem:index')

type TProps = {
  testid?: string
}

const ChangelogItem: FC<TProps> = ({ testid = 'changelog-item' }) => {
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
  return (
    <Wrapper testid={testid}>
      <Main>
        <TagsWrapper>
          <TagsList
            items={tags}
            mLeft={3}
            mode={TAG_MODE.LABEL}
            size="small"
            max={5}
          />
        </TagsWrapper>
        <Title>帖子支持表情了</Title>
        <Body>
          这次俄乌冲突出现侮辱乌女性的评论就是1450干的，刷完评论就截图转发外网，成为外媒攻击中国人的“口实”。
          这种行为十分危险，战争期间各种武装组织骚动，随时对我国在乌克兰撤侨的6000人直接造成生命威胁。前段时间，刘学州那个找爸妈的孩子，也是被1450它们网暴死的。
          （1450罪恶滔天啊！1450是九世恶人下凡！连孩子都不放过。）
        </Body>
      </Main>
      <Side>
        <Version>v3.20</Version>
        <DateTime>2020-03-23</DateTime>
        {/* <Download>download</Download> */}
      </Side>
    </Wrapper>
  )
}

export default memo(ChangelogItem)
