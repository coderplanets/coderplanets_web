import { FC, memo } from 'react'

import {
  Wrapper,
  Header,
  FAQ,
  FAQTitle,
  FAQDesc,
  MoreLink,
  Section,
  ArrowIcon,
  Title,
} from './styles/collapse'

import type { TProps as TIndex } from './index'

type TProps = Pick<TIndex, 'articles'>

const Collapse: FC<TProps> = ({ articles }) => {
  return (
    <Wrapper>
      <Header>
        <FAQ>
          <FAQTitle>常见问题</FAQTitle>
        </FAQ>
      </Header>

      {articles.map((item) => (
        <Section key={item.title}>
          <Title>{item.title}</Title>
          <ArrowIcon />
        </Section>
      ))}

      <FAQDesc>
        <div>如有其他疑问，请</div>
        <MoreLink>告诉我们</MoreLink>。
      </FAQDesc>
    </Wrapper>
  )
}

export default memo(Collapse)
