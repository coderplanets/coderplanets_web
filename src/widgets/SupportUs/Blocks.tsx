/*
 *
 * FriendsContent
 *
 */

import { FC, memo } from 'react'

import { ICON } from '@/config'
import { ROUTE } from '@/constant'

import { SpaceGrow } from '@/widgets/Common'

import {
  Wrapper,
  Block,
  Icon,
  Title,
  Divider,
  Desc,
  MailIcon,
  LinkIcon,
} from './styles/blocks'

const Blocks: FC = () => {
  return (
    <Wrapper>
      <Block href={`/${ROUTE.MEMBERSHIP}`} target="_blank">
        <Title>
          <Icon src={`${ICON}/menu/vip.svg`} />
          成为会员
          <SpaceGrow />
          <LinkIcon src={`${ICON}/shape/link.svg`} />
        </Title>
        <Divider />
        <Desc>成为 CP 付费会员，我们将为你持续提供高质量的服务和体验。</Desc>
      </Block>
      <Block href={`/${ROUTE.MEMBERSHIP}`} target="_blank">
        <Title>
          <Icon src={`${ICON}/menu/sponsor.svg`} />
          团队赞助
          <SpaceGrow />
          <MailIcon src={`${ICON}/subscribe/email-solid.svg`} />
        </Title>
        <Divider />
        <Desc>
          你的团队链接将永久出现在本项目的 Github 主页以及本站的特别感谢中。
        </Desc>
      </Block>
      <Block>
        <Title>
          <Icon src={`${ICON}/menu/volunteer.svg`} />
          成为志愿者
          <SpaceGrow />
          <LinkIcon src={`${ICON}/shape/link.svg`} />
        </Title>
        <Divider />
        <Desc>
          成为某个你感兴趣的子社区志愿者，协助管理该子社区内容，维护日常站务。
        </Desc>
      </Block>
      <Block href="https://github.com/coderplanets" target="_blank">
        <Title>
          <Icon src={`${ICON}/social/github.svg`} />
          参与开发
          <SpaceGrow />
          <LinkIcon src={`${ICON}/shape/link.svg`} />
        </Title>
        <Divider />
        <Desc>
          本站的所有源代码都托管在 Github 上，运营数据也完全开放透明。欢迎参与。
        </Desc>
      </Block>
    </Wrapper>
  )
}

export default memo(Blocks)
