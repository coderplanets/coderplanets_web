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

const LinksCard = ({ testId, title, items }) => {
  return (
    <Wrapper testId={testId}>
      <Header>
        <Title>{title}</Title>
      </Header>
      <ListWrapper>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
        <MoreWrapper>
          <ArrowButton
            size="small"
            arrowStyle="simple"
            onClick={() => {
              console.log('more')
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
  testId: T.string,
  title: T.string,
  items: T.arrayOf(
    T.shape({
      id: T.number,
      title: T.string,
    }),
  ),
}

LinksCard.defaultProps = {
  testId: 'links-card',
  title: '',
  items: [],
}

export default React.memo(LinksCard)
