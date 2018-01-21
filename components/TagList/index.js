/*
 *
 * TagList
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'

import { Wrapper, TagItem, TagDot, TagTitle } from './styles'

import { makeDebugger } from '../../utils/functions'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:TagList:index')
/* eslint-enable no-unused-vars */

const TagList = ({ tags, active }) => {
  return (
    <Wrapper>
      {tags.map(tag => (
        <TagItem key={shortid.generate()}>
          <TagDot color={tag.color} active={active} title={tag.title} />
          <TagTitle active={active} title={tag.title} color={tag.color}>
            {tag.title}
          </TagTitle>
        </TagItem>
      ))}
    </Wrapper>
  )
}

TagList.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
  active: PropTypes.string,
  // https://www.npmjs.com/package/prop-types
}

TagList.defaultProps = {
  active: '',
}

export default TagList
