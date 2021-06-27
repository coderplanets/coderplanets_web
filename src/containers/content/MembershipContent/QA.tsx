import { FC, memo } from 'react'

import { ICON } from '@/config'
import { Wrapper, Header, Icon, Content, QTitle, ABody } from './styles/qa'

type TProps = {
  testid?: string
}

const QA: FC<TProps> = ({ testid = 'membership-qa' }) => {
  return (
    <Wrapper testid={testid}>
      <Header>
        <Icon src={`${ICON}/menu/Q-A.svg`} />
        常见问题
      </Header>
      <Content>
        <QTitle>为什么要推出付费服务 ？</QTitle>
        <ABody>
          简单来讲，为了活下去。总体而言，免费服务和付费服务只有体验上的差别，没有内容上和访问限制上的区别对待。
        </ABody>

        <QTitle>wip 是什么意思 ？</QTitle>
        <ABody>
          wip(work in progress)
          表示目前正在开发中的功能，周期一般在一个月之内。如果已经购买包含此功能的会员服务，在开发完成后不会重复收费。
        </ABody>

        <QTitle>不小心手抖订阅后，可以退款吗 ？</QTitle>
        <ABody>当然可以，付费后若不满意，你可以在 7 天内随时退款。</ABody>
      </Content>
    </Wrapper>
  )
}

export default memo(QA)
