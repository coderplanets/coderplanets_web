/*
 *
 * FriendsGallery
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@/utils/logger'
import ArrowButton from '@/components/Buttons/ArrowButton'

import {
  Wrapper,
  Block,
  Header,
  IntroHead,
  Icon,
  Title,
  LinkWrapper,
} from './styles/friends_gallery'

/* eslint-disable-next-line */
const log = buildLog('c:FriendsGallery:index')

const FriendsGallery = ({ items, column }) => {
  return (
    <Wrapper center={items.length < column}>
      {items.map((item) => (
        <Block key={item.id} level={item.level} column={column}>
          <Header>
            <IntroHead>
              <Icon src={item.icon} />
              <Title level={item.level}>{item.title}</Title>
            </IntroHead>
          </Header>
          <LinkWrapper>
            <ArrowButton size="tiny">{item.addr}</ArrowButton>
          </LinkWrapper>
        </Block>
      ))}
    </Wrapper>
  )
}

FriendsGallery.propTypes = {
  items: T.arrayOf(T.object),
  column: T.oneOf([4, 5]),
}

FriendsGallery.defaultProps = {
  items: [],
  column: 4,
}

export default React.memo(FriendsGallery)
