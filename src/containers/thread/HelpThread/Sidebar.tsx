import { FC } from 'react'

import {
  Wrapper,
  Header,
  FAQIcon,
  Title,
  Section,
  Footer,
  MoreLink,
} from './styles/sidebar'

const Sidebar: FC = () => {
  return (
    <Wrapper>
      <Header>
        <FAQIcon />
        <Title>常见问题</Title>
      </Header>
      <Section>购买标准版或者高级版是否可开具发票？</Section>
      <Section>高级版使用过程中如何增加团队人数？ </Section>
      <Section>小画桌如何保障数据安全？ </Section>
      <Section>标准版是否可以升级为高级版？ </Section>
      <Section>小画桌语音是否支持额外购买？ </Section>
      <Section>是否支持7天无理由退款？ </Section>
      <Section>
        为什么修改了环境变量（或全局变量）值，而引用的地方没有生效？
      </Section>
      <Footer>
        <div>如果还有疑问，请</div>
        <MoreLink>告诉我们</MoreLink>。
      </Footer>
    </Wrapper>
  )
}

export default Sidebar
