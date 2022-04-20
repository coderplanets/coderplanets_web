import { FC, memo } from 'react'

import {
  Wrapper,
  Header,
  FAQIcon,
  Title,
  Section,
  Footer,
  MoreLink,
} from './styles/sidebar'

import type { TProps as TIndex } from './index'

type TProps = Pick<TIndex, 'articles'>

const Sidebar: FC<TProps> = ({ articles }) => {
  return (
    <Wrapper>
      <Header>
        <FAQIcon />
        <Title>常见问题</Title>
      </Header>
      {articles.map((item) => (
        <Section key={item.title}>{item.title}</Section>
      ))}
      <Footer>
        <div>如果还有疑问，请</div>
        <MoreLink>告诉我们</MoreLink>。
      </Footer>
    </Wrapper>
  )
}

export default memo(Sidebar)
