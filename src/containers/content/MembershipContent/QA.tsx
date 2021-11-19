import { FC, memo } from 'react'

import { ICON } from '@/config'
import { ROUTE } from '@/constant'
import Linker from '@/widgets/Linker'

import {
  Wrapper,
  Header,
  Icon,
  Content,
  QTitle,
  ABody,
  Bold,
  Ul,
  Li,
} from './styles/qa'

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
          简单来讲，我们希望能够健康的生存下去，物质基础对于社区的维护与功能开发（尤其是这些高级功能）
          是不可缺少的。需要特别说明的是，免费服务和付费服务只有体验上的差别，
          <Bold>没有内容上和访问限制上的区别对待</Bold>
          ，你也可以通过
          <Linker
            src={ROUTE.SUPPORT_US}
            external={false}
            text="其他渠道"
            inline
            left={4}
            right={4}
          />
          支持我们。
        </ABody>

        <QTitle>这些功能都已经实现了吗 ？</QTitle>
        <ABody>
          Nope.
          很多高级功能还没有实现或目前还不完善，因此所有功能在内测阶段都是开放的，内测阶段结束后根据完成情况，所列出条目可能会有所调整。
        </ABody>

        <QTitle>不小心手抖，可以退款吗 ？</QTitle>
        <ABody>
          选择高级服务后的 15
          以内都是「试吃」阶段，你可以在这段时间内评估体验是否符合你的预期，再决定是否付费。
        </ABody>
        <QTitle>一些基本承诺</QTitle>
        <ABody>
          <Ul>
            <Li>这里遵循古典的互联网精神，尊重并践行 Open Web 的价值观。</Li>
            <Li>
              认同知识共享，不会在任何阶段，以任何形式参与或鼓励「卖课」。
            </Li>
            <Li>
              相信长期主义，会持续用技术、组织形式等各种手段守住社区下限。
            </Li>
          </Ul>
        </ABody>
      </Content>
    </Wrapper>
  )
}

export default memo(QA)
