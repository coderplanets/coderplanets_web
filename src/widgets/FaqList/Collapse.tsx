import { FC, memo, useState, useCallback } from 'react'
import { includes, reject } from 'ramda'

import type { TID } from '@/spec'

import {
  Wrapper,
  FAQ,
  FAQTitle,
  Header,
  Title,
  ArrowIcon,
  Body,
  MoreLink,
  Section,
  Footer,
} from './styles/collapse'

import type { TProps as TIndex } from './index'

type TProps = Pick<TIndex, 'articles'>

const Collapse: FC<TProps> = ({ articles }) => {
  const [openedIDs, setOpenedIDs] = useState<TID[]>([])

  const toggle = useCallback(
    (id) => {
      includes(id, openedIDs)
        ? setOpenedIDs(reject((_id) => _id === id, openedIDs))
        : setOpenedIDs([id, ...openedIDs])
    },
    [openedIDs],
  )

  return (
    <Wrapper>
      <FAQ>
        <FAQTitle>常见问题</FAQTitle>
      </FAQ>

      {articles.map((item) => {
        const isOpend = includes(item.id, openedIDs)

        return (
          <Section key={item.id}>
            <Header onClick={() => toggle(item.id)}>
              <Title $active={isOpend}>{item.title}</Title>
              <ArrowIcon $active={isOpend} />
            </Header>

            <Body show={isOpend}>{item.body}</Body>
          </Section>
        )
      })}

      <Footer>
        <div>如有其他疑问，请</div>
        <MoreLink>告诉我们</MoreLink>。
      </Footer>
    </Wrapper>
  )
}

export default memo(Collapse)
