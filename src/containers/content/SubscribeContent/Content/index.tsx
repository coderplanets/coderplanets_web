/* eslint-disable max-len */
import { FC, memo } from 'react'

import Linker from '@/widgets/Linker'

import { Wrapper, Title, P, Bold, Ul, Li } from '../styles/content'

const Content: FC = () => {
  return (
    <Wrapper>
      <Title>关于内容订阅</Title>
      <P>
        CoderPlanets 子社区以及版块的内容可通过邮件或者 RSS
        订阅。但目前因为社区内容较少以及开发精力受限，
        <Bold>相关功能还未开始开发</Bold>
        。如果你有这方面的建议，
        <Linker
          src="/feedback"
          external={false}
          text="欢迎参与共建"
          inline
          left={4}
          right={4}
        />
      </P>
      <br />
      <br />
      <Title>一些基本承诺</Title>
      <Ul>
        <Li>所有内容均可订阅。</Li>
        <Li>会尽量遵循最新的 RSS 协议标准。</Li>
        <Li>可以自定义订阅内容的粒度。</Li>
      </Ul>
    </Wrapper>
  )
}

export default memo(Content)
