/*
 *
 * FriendsGallery
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@/utils'
import { ArrowButton } from '@/components/Buttons'

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
      {items.map((item, index) => (
        <Block
          key={item.id}
          borderTop={index <= 2}
          borderRight={(index + 1) % 3 !== 0}
          level={item.level}
          column={column}
        >
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
  column: T.oneOf([3, 4]),
}

FriendsGallery.defaultProps = {
  items: [],
  column: 3,
}

export default React.memo(FriendsGallery)
