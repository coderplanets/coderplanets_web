import { FC, memo } from 'react'

import { ICON } from '@/config'
import {
  Wrapper,
  InnerWrapper,
  Media,
  Logo,
  LogoWrapper,
  Title,
} from './styles/platform'

// 链接分享(包含 md)，
// Embed, twitter, 微信，微博，facebook, QQ 群，QQ 空间，邮箱

const medias = [
  {
    id: '0',
    title: '链接',
    logo: `${ICON}/shape/link.svg`,
    small: true,
  },
  {
    id: '1',
    title: '嵌入',
    logo: `${ICON}/social/embed-share.svg`,
    small: true,
  },
  {
    id: '2',
    title: 'Twitter',
    logo: `${ICON}/social/twitter-share.png`,
  },
  {
    id: '3',
    title: '微信',
    logo: `${ICON}/social/wechat-share.png`,
    bg: 'white',
  },
  {
    id: '4',
    title: '邮箱',
    logo: `${ICON}/social/mail-share.svg`,
    small: true,
  },
  {
    id: '5',
    title: 'QQ',
    logo: `${ICON}/social/QQ-share.png`,
  },
  {
    id: '6',
    title: '微博',
    logo: `${ICON}/social/weibo-share.png`,
  },
  {
    id: '7',
    title: 'Facebook',
    logo: `${ICON}/social/facebook-share.png`,
    bg: 'white',
  },
]

const Platforms: FC = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        {medias.map((item) => (
          <Media key={item.id}>
            <LogoWrapper bg={item.bg}>
              <Logo src={item.logo} small={!!item.small} />
            </LogoWrapper>
            <Title>{item.title}</Title>
          </Media>
        ))}
      </InnerWrapper>
    </Wrapper>
  )
}

export default memo(Platforms)
