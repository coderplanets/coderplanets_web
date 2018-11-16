/*
 *
 * InlineTags
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import Maybe from '../Maybe'
import { Wrapper, Tag, Dot, Title } from './styles'

import { makeDebugger, uid, Trans } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:InlineTags:index')
/* eslint-enable no-unused-vars */

const InlineTags = ({ data }) => (
  <Maybe test={data}>
    <Wrapper>
      {data.map(tag => (
        <Tag key={uid.gen()}>
          <Dot color={tag.color} />
          <Title>{Trans(tag.title)}</Title>
        </Tag>
      ))}
    </Wrapper>
  </Maybe>
)

InlineTags.propTypes = {
  // https://www.npmjs.com/package/prop-types
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      color: PropTypes.string,
    })
  ),
}

InlineTags.defaultProps = {
  data: [],
}

export default InlineTags
