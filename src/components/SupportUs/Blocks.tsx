/*
 *
 * FriendsContent
 *
 */

import { FC, memo, useState } from 'react'
import dynamic from 'next/dynamic'
import { ICON } from '@/config'

import {
  Wrapper,
  Block,
  Title,
  Divider,
  Desc,
  MailIcon,
  LinkIcon,
} from './styles/blocks'

const BuyMeChuanChuan = dynamic(() => import('@/components/BuyMeChuanChuan'), {
  ssr: false,
})

const Blocks = () => {
  const [showChuan, setShowChuan] = useState(false)

  return (
    <Wrapper>
      <BuyMeChuanChuan
        onClose={() => setShowChuan(false)}
        onLogin={() => console.log('onLogin')}
        onPay={() => console.log('onPay')}
        show={showChuan}
      />

      <Block onClick={() => setShowChuan(true)}>
        <Title>远程撸串</Title>
        <Divider />
        <Desc>你的远程投喂将有助于开发团队在饱腹状态下工作， Cheers!</Desc>
      </Block>
      <Block>
        <Title>
          成为会员
          <LinkIcon src={`${ICON}/shape/link.svg`} />
        </Title>
        <Divider />
        <Desc>
          成为 CP 付费会员，持续支持社区发展，同时解锁最优质的体验和服务。
        </Desc>
      </Block>
      <Block>
        <Title>
          团队赞助
          <MailIcon src={`${ICON}/subscribe/email-solid.svg`} />
        </Title>
        <Divider />
        <Desc>
          你的团队推广将出现在本项目的 Github 主页以及本站的特别感谢中。
        </Desc>
      </Block>
      <Block>
        <Title>
          成为志愿者
          <LinkIcon src={`${ICON}/shape/link.svg`} />
        </Title>
        <Divider />
        <Desc>
          成为某个你感兴趣的子社区志愿者，协助管理该子社区内容，维护日常站务。
        </Desc>
      </Block>
      <Block>
        <Title>
          参与开发
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
