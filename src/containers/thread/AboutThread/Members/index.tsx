import { FC, memo } from 'react'

import { mockUsers } from '@/utils/mock'
import AdminMember from './AdminMember'

import {
  Wrapper,
  Block,
  BottomBlock,
  Header,
  Title,
  Row,
  Admin,
  NormalAvatar,
} from '../styles/members'

const Members: FC = () => {
  return (
    <Wrapper>
      <Block>
        <Header>
          <Title>团队成员</Title>
        </Header>
        <Row>
          {mockUsers(6).map((user) => (
            <Admin key={user.id}>
              <AdminMember user={user} />
            </Admin>
          ))}
        </Row>
      </Block>

      <BottomBlock>
        <Header>
          <Title>参与者</Title>
        </Header>
        <Row>
          {mockUsers(15).map((user) => (
            <NormalAvatar key={user.id} src={user.avatar} />
          ))}
          {mockUsers(15).map((user) => (
            <NormalAvatar key={user.id} src={user.avatar} />
          ))}
        </Row>
      </BottomBlock>
    </Wrapper>
  )
}

export default memo(Members)
