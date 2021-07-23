import { FC, memo } from 'react'

import { ICON } from '@/config'
import type { TArticle } from '@/spec'

import { SHARE_TYPE } from './constant'
import {
  Wrapper,
  Header,
  Hint,
  Article,
  InnerWrapper,
  Media,
  Logo,
  LogoWrapper,
  Title,
} from './styles/platform'
import { toPlatform } from './logic'

// 链接分享(包含 md)，
// Embed, twitter, 微信，微博，facebook, QQ 群，QQ 空间，邮箱

const medias = [
  {
    id: '0',
    title: '链接',
    logo: `${ICON}/shape/link.svg`,
    small: true,
    type: SHARE_TYPE.LINKS,
  },
  {
    id: '1',
    title: '嵌入',
    logo: `${ICON}/social/embed-share.svg`,
    small: true,
    type: SHARE_TYPE.EMBED,
  },
  {
    id: '2',
    title: 'Twitter',
    logo: `${ICON}/social/twitter-share.png`,
    type: SHARE_TYPE.TWITTER,
  },
  {
    id: '3',
    title: '微信',
    logo: `${ICON}/social/wechat-share.png`,
    bg: 'white',
    type: SHARE_TYPE.WECHAT,
  },
  {
    id: '4',
    title: '邮箱',
    logo: `${ICON}/social/mail-share.svg`,
    small: true,
    type: SHARE_TYPE.EMAIL,
  },
  {
    id: '5',
    title: 'Telegram',
    logo: `${ICON}/social/telegram-share.png`,
    bg: 'white',
    type: SHARE_TYPE.TELEGRAM,
  },
  {
    id: '6',
    title: '微博',
    logo: `${ICON}/social/weibo-share.png`,
    type: SHARE_TYPE.WEIBO,
  },
  {
    id: '7',
    title: 'Facebook',
    logo: `${ICON}/social/facebook-share.png`,
    bg: 'white',
    type: SHARE_TYPE.FACEBOOK,
  },
]

type TProps = {
  article: TArticle
}

const Platforms: FC<TProps> = ({ article }) => {
  return (
    <Wrapper>
      <Header>
        <Hint>分享</Hint>
        <Article>{article.title}</Article>
        <Hint>到:</Hint>
      </Header>
      <InnerWrapper>
        {medias.map((item) => (
          <Media key={item.id} onClick={() => toPlatform(item.type)}>
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
