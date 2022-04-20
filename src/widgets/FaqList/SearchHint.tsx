import { FC, memo } from 'react'

import {
  Wrapper,
  Header,
  FAQIcon,
  Title,
  Body,
  Section,
  Item,
  Footer,
  MoreLink,
} from './styles/search_hint'

import type { TProps as TIndex } from './index'

type TProps = Pick<TIndex, 'articles'>

const SearchHint: FC<TProps> = ({ articles }) => {
  return (
    <Wrapper>
      <Header>
        <FAQIcon />
        <Title>常见问题</Title>
      </Header>
      <Body>
        {articles.map((item) => (
          <Section key={item.title}>
            <Item>{item.title}</Item>
          </Section>
        ))}
      </Body>
      <Footer>
        <div>更多问题，请移步</div>
        <MoreLink>帮助台</MoreLink>。
      </Footer>
    </Wrapper>
  )
}

export default memo(SearchHint)
