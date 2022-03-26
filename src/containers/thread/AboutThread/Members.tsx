import { FC, memo } from 'react'

import { mockUsers } from '@/utils/mock'

import {
  Wrapper,
  Block,
  Header,
  Title,
  Count,
  Row,
  Admin,
  AdminInfo,
  Name,
  Bio,
  AdminAvatar,
  NormalAvatar,
} from './styles/members'

const Members: FC = () => {
  return (
    <Wrapper>
      <Block>
        <Header>
          <Title>团队成员</Title>
          <Count>23</Count>
        </Header>

        <Row>
          {mockUsers(6).map((user) => (
            <Admin key={user.id}>
              <AdminAvatar src={user.avatar} />
              <AdminInfo>
                <Name>{user.nickname}</Name>
                <Bio>{user.bio}</Bio>
              </AdminInfo>
            </Admin>
          ))}
        </Row>
      </Block>

      <Block>
        <Header>
          <Title>参与者</Title>
          <Count>1839</Count>
        </Header>
        <Row>
          {mockUsers(15).map((user) => (
            <NormalAvatar key={user.id} src={user.avatar} />
          ))}
          {mockUsers(15).map((user) => (
            <NormalAvatar key={user.id} src={user.avatar} />
          ))}
        </Row>
      </Block>
    </Wrapper>
  )
}

export default memo(Members)
