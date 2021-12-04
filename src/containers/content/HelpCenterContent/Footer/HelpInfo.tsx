import { FC } from 'react'

import type { TCommunity } from '@/spec'

import {
  Wrapper,
  Title,
  ContactsWrapper,
  PostLink,
  ContactItem,
} from '../styles/footer/help_info'

type TProps = {
  community: TCommunity
}

const HelpInfo: FC<TProps> = ({ community }) => {
  return (
    <Wrapper>
      <Title>当前问答都解决不了我的问题?</Title>
      <div>
        您可以在 {community.title} 社区{' '}
        <PostLink href={`/${community.raw}`}>[发帖询问]</PostLink>
        ，或通过官方渠道联系我们:
      </div>
      <ContactsWrapper>
        <ContactItem>邮箱: xx@gmail.com</ContactItem>
        <ContactItem>微信: mydearxym</ContactItem>
      </ContactsWrapper>
    </Wrapper>
  )
}

export default HelpInfo
