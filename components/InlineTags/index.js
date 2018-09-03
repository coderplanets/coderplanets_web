/*
 *
 * InlineTags
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import shortid from 'shortid'

import { Wrapper, Tag, Dot, Title } from './styles'

import { makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:InlineTags:index')
/* eslint-enable no-unused-vars */

const InlineTags = ({ data }) => {
  if (R.isEmpty(data)) return null
  return (
    <Wrapper>
      {data.map(tag => (
        <Tag key={shortid.generate()}>
          <Dot color={tag.color} />
          <Title>{tag.title}</Title>
        </Tag>
      ))}
    </Wrapper>
  )
}

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
