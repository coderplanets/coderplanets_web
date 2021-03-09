/*
 *
 * LinksCard
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@/utils'

import { ArrowButton } from '@/components/Buttons'

import Item from './Item'
import { Wrapper, Header, Title, ListWrapper, MoreWrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:LinksCard:index')

const LinksCard = ({
  testid,
  title,
  items,
  onSelect,
  mLeft,
  mRight,
  mBottom,
}) => {
  return (
    <Wrapper testid={testid} mLeft={mLeft} mRight={mRight} mBottom={mBottom}>
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
      id: T.number,
      title: T.string,
    }),
  ),
  onSelect: T.func.isRequired,
  mLeft: T.number,
  mRight: T.number,
  mBottom: T.number,
}

LinksCard.defaultProps = {
  testid: 'links-card',
  title: '',
  items: [],

  mLeft: 14,
  mRight: 12,
  mBottom: 40,
}

export default React.memo(LinksCard)
