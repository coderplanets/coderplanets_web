import { FC, memo } from 'react'

import { ICON } from '@/config'
import { mockUsers } from '@/utils/mock'

import { IconSwitcher } from '@/widgets/Switcher'
import AvatarsGroup from '@/widgets/AvatarsGroup'
import { Space } from '@/widgets/Common'

import {
  Wrapper,
  Title,
  Count,
  ModeWrapper,
  LeftPart,
  RightPart,
  KanbanIcon,
  JoinTitle,
} from './styles/actions'

const switchItems = [
  {
    key: 'kanban',
    iconSrc: `${ICON}/article/comment-reply-mode.svg`,
    desc: '看板模式',
  },
  {
    key: 'list',
    iconSrc: `${ICON}/article/comment-timeline-mode.svg`,
    desc: '列表模式',
  },
]

const Actions: FC = () => {
  return (
    <Wrapper>
      <LeftPart>
        <KanbanIcon />
        <Title>
          看板墙
          <Count>23</Count>
        </Title>
      </LeftPart>
      <RightPart>
        <ModeWrapper>
          <IconSwitcher
            items={switchItems}
            activeKey="kanban"
            onChange={console.log}
          />
        </ModeWrapper>
        <Space right={20} />
        <JoinTitle>参与者</JoinTitle>
        <AvatarsGroup size="medium" users={mockUsers(6)} total={20} />
        {/* <Space right={25} /> */}
        {/* <NewButton size="medium">
          <BtnText>新增</BtnText>
        </NewButton> */}
      </RightPart>
    </Wrapper>
  )
}

export default memo(Actions)
