import { FC, memo, Fragment } from 'react'

import type { TUser } from '@/spec'
import { Wrapper, Section, Text, JoinAt, JoinSlash } from './styles/footer'

type TProps = {
  user: TUser
}

const Footer: FC<TProps> = ({ user }) => {
  return (
    <Wrapper>
      <Section>
        <Text>注册于</Text>
        <JoinAt>
          2020
          <JoinSlash>/</JoinSlash>
          13
          <JoinSlash>/</JoinSlash>
          02
        </JoinAt>
      </Section>
      <Section>
        <Text>主页被浏览 456 次</Text>
      </Section>
    </Wrapper>
  )
}

export default memo(Footer)
