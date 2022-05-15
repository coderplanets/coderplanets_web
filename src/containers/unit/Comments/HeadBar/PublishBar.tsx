import { FC, memo } from 'react'

import { mockUsers } from '@/utils/mock'
import Button from '@/widgets/Buttons/Button'

import {
  Wrapper,
  AccountWrapper,
  Avatar,
  UserName,
  ActionsWrapper,
  Publishcon,
} from '../styles/head_bar/publish_bar'

type TProps = {
  closeEditor: () => void
}

const PublishBar: FC<TProps> = ({ closeEditor }) => {
  return (
    <Wrapper>
      <AccountWrapper>
        <Avatar src={mockUsers(3)[0].avatar} />
        <UserName>mydearxym</UserName>
      </AccountWrapper>
      <ActionsWrapper>
        <Button
          size="small"
          space={20}
          ghost
          noBorder
          onClick={() => closeEditor()}
        >
          取消
        </Button>

        <Button size="small" space={10}>
          <Publishcon />
          发布
        </Button>
      </ActionsWrapper>
    </Wrapper>
  )
}

export default memo(PublishBar)
