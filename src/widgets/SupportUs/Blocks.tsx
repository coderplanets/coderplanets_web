/*
 *
 * FriendsContent
 *
 */

import { FC, memo } from 'react'

import { EMAIL_SUPPORT } from '@/config'
import { ROUTE } from '@/constant'

import { SpaceGrow } from '@/widgets/Common'

import {
  Wrapper,
  Block,
  Icon,
  Title,
  Divider,
  Desc,
  LinkIcon,
} from './styles/blocks'

const Blocks: FC = () => {
  return (
    <Wrapper>
      <Block href={`/${ROUTE.MEMBERSHIP}`} target="_blank">
        <Title>
          <Icon.VIP />
          成为会员
          <SpaceGrow />
          <LinkIcon />
        </Title>
        <Divider />
        <Desc>成为 CP 付费会员，我们将为你持续提供更高质量的服务和体验。</Desc>
      </Block>
      <Block href={`/${ROUTE.SPONSOR}`} target="_blank">
        <Title>
          <Icon.Sponsor />
          团队赞助
          <SpaceGrow />
          <LinkIcon />
        </Title>
        <Divider />
        <Desc>
          你的团队链接将永久出现在本项目的 Github 主页以及本站的特别感谢中。
        </Desc>
      </Block>
      <Block
        href={`mailto:${EMAIL_SUPPORT}?subject=申请成为社区志愿者&body=感谢您的关注，成为子社区志愿者后，您将获得对应社区的各种维护管理等服务大家的权限，协助社区的健康发展. %0A本着对社区成员负责任的态度，我们需要简单了解一下你的背景 (最终正文请删除本行): %0A%0A%0A你是谁? (请提供必要的社交账号，包括但不限于 twitter / zhihu / weibo 等) %0A%0A%0A你做过什么? (包括但不限于 github / stackoverflow / 个人网站(博客) 等技术社区账号) %0A%0A%0A你对 CoderPlanets 的志愿者自治有什么建议吗?`}
        target="_blank"
      >
        <Title>
          <Icon.Volunteer />
          成为志愿者
          <SpaceGrow />
          <Icon.Email />
        </Title>
        <Divider />
        <Desc>
          成为某个你感兴趣的子社区志愿者，协助管理该子社区内容，维护日常站务。
        </Desc>
      </Block>
      <Block href="https://github.com/coderplanets" target="_blank">
        <Title>
          <Icon.Github />
          参与开发
          <SpaceGrow />
          <LinkIcon />
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
