import { FC, memo } from 'react'

import type { TUser } from '@/spec'
import { Wrapper, Section, Text, Num } from './styles/footer'

type TProps = {
  user: TUser
}

const Footer: FC<TProps> = ({ user }) => {
  return (
    <Wrapper>
      <Section>
        <Text>注册于</Text>
        <Num>{new Date(user.insertedAt).toUTCString()}</Num>
      </Section>
      <Section>
        <Text>
          主页被浏览 <Num>{user.views}</Num> 次
        </Text>
      </Section>
    </Wrapper>
  )
}

export default memo(Footer)
