import { FC, memo } from 'react'

import { includes } from 'ramda'

import type { TID, TArticle } from '@/spec'
import {
  Wrapper,
  Header,
  Title,
  ArrowIcon,
  Body,
} from '../styles/collapse/section'

type TProps = {
  item: TArticle
  openedIDs: TID[]
  toggle: (id: TID) => void
}

const Section: FC<TProps> = ({ item, openedIDs, toggle }) => {
  const isOpened = includes(item.id, openedIDs)

  return (
    <Wrapper>
      <Header onClick={() => toggle(item.id)}>
        <Title $active={isOpened}>{item.title}</Title>
        <ArrowIcon $active={isOpened} />
      </Header>

      <Body show={isOpened}>{item.body}</Body>
    </Wrapper>
  )
}

export default memo(Section)
