import { FC, memo } from 'react'

import { ICON } from '@/config'
import type { TArticle } from '@/spec'

import { SHARE_TYPE } from '../constant'
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
} from '../styles/panel/platform'
import { toPlatform } from '../logic'

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
    type: SHARE_TYPE.WECHAT,
    noBg: true,
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
    type: SHARE_TYPE.TELEGRAM,
  },
  {
    id: '6',
    title: '微博',
    logo: `${ICON}/social/weibo-share.png`,
    type: SHARE_TYPE.WEIBO,
    noBg: true,
  },
  {
    id: '7',
    title: 'Douban',
    logo: `${ICON}/social/douban-share.png`,
    type: SHARE_TYPE.DOUBAN,
  },
  {
    id: '8',
    title: 'Facebook',
    logo: `${ICON}/social/facebook-share.png`,
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
            <LogoWrapper noBg={!!item.noBg}>
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
