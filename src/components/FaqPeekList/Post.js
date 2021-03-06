/*
 *
 * FAQ Post
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON } from '@/config'
import { buildLog } from '@/utils'

import { Wrapper, Title, Reaction, Icon, Count } from './styles/post'

/* eslint-disable-next-line */
const log = buildLog('c:Post:index')

const Post = ({ item }) => {
  return (
    <Wrapper>
      <Title>{item.title}</Title>
      <Reaction>
        <Icon src={`${ICON}/shape/vote-up-solid.svg`} />
        <Count>28</Count>
      </Reaction>
    </Wrapper>
  )
}

Post.propTypes = {
  item: T.shape({
    title: T.string,
  }).isRequired,
}

Post.defaultProps = {}

export default React.memo(Post)
