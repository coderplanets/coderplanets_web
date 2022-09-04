/*
 *
 * LinksCard
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@/utils/logger'

import ArrowButton from '@/widgets/Buttons/ArrowButton'

import Item from './Item'
import { Wrapper, Header, Title, ListWrapper, MoreWrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:LinksCard:index')

const LinksCard = ({ testid, title, items, onSelect, left, right, bottom }) => {
  return (
    <Wrapper testid={testid} left={left} right={right} bottom={bottom}>
      <Header>
        <Title>{title}</Title>
      </Header>
      <ListWrapper>
        {items.map((item) => (
          <Item key={item.id} item={item} onSelect={onSelect} />
        ))}
        <MoreWrapper>
          <ArrowButton
            size="small"
            arrowStyle="simple"
            onClick={() => {
              onSelect()
            }}
          >
            更多
          </ArrowButton>
        </MoreWrapper>
      </ListWrapper>
    </Wrapper>
  )
}

LinksCard.propTypes = {
  testid: T.string,
  title: T.string,
  items: T.arrayOf(
    T.shape({
      id: T.string,
      title: T.string,
    }),
  ),
  onSelect: T.func.isRequired,
  left: T.number,
  right: T.number,
  bottom: T.number,
}

LinksCard.defaultProps = {
  testid: 'links-card',
  title: '',
  items: [],

  left: 14,
  right: 12,
  bottom: 40,
}

export default React.memo(LinksCard)
