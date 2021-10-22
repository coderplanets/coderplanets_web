/*
 *
 * FriendsContent
 *
 */

import { FC, memo, useState } from 'react'
import dynamic from 'next/dynamic'
import { ICON } from '@/config'

import { PAYMENT_USAGE } from '@/constant'
import { checkout } from '@/utils/helper'

import { SpaceGrow } from '@/widgets/Common'

import {
  Wrapper,
  Block,
  Icon,
  FeedIcon,
  Title,
  Divider,
  Desc,
  MailIcon,
  LinkIcon,
} from './styles/blocks'

const Cashier = dynamic(() => import('@/containers/tool/Cashier'), {
  ssr: false,
})

const BuyMeChuanChuan = dynamic(() => import('@/widgets/BuyMeChuanChuan'), {
  ssr: false,
})

const Blocks = () => {
  const [showChuan, setShowChuan] = useState(false)

  return (
    <Wrapper>
      <Cashier />
      <BuyMeChuanChuan
        onClose={() => setShowChuan(false)}
        onLogin={() => console.log('onLogin')}
        onPay={(amount) => {
          console.log('onPay: ', amount)
          setShowChuan(false)
          checkout(amount, PAYMENT_USAGE.DONATE)
        }}
        show={showChuan}
      />

      <Block onClick={() => setShowChuan(true)}>
        <Title>
          <FeedIcon src={`${ICON}/menu/feed.svg`} />
          远程撸串
          <SpaceGrow />
        </Title>

        <Divider />
        <Desc>你的远程投喂将有助于开发团队在饱腹状态下工作， 冲！</Desc>
      </Block>
      <Block>
        <Title>
          <Icon src={`${ICON}/menu/vip.svg`} />
          成为会员
          <SpaceGrow />
          <LinkIcon src={`${ICON}/shape/link.svg`} />
        </Title>
        <Divider />
        <Desc>
          成为 CP 付费会员，解锁本站最高质量的体验和服务，同时支持社区持续发展。
        </Desc>
      </Block>
      <Block>
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
      <Block>
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

export default Blocks
