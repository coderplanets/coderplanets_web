/*
 *
 * InlineTags
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { makelogger, sortByColor, Trans } from '@utils'
import Maybe from '@components/Maybe'
import Popover from '@components/Popover'

import { Wrapper, Tag, Dot, Title, MoreText, PopoverInfo } from './styles'

/* eslint-disable-next-line */
const log = makelogger('c:InlineTags:index')

const FullList = ({ data }) => (
  <Wrapper>
    {sortByColor(data).map(tag => (
      <Tag key={tag.title}>
        <Dot color={tag.color} />
        <Title>{Trans(tag.title)}</Title>
      </Tag>
    ))}
  </Wrapper>
)

const InlineTags = ({ data, max }) => {
  if (data.length > max) {
    return (
      <Popover
        placement="bottom"
        trigger="hover"
        content={
          <PopoverInfo>
            <FullList data={data} />
          </PopoverInfo>
        }
      >
        <Wrapper>
          {sortByColor(data)
            .slice(0, max)
            .map(tag => (
              <Tag key={tag.title}>
                <Dot color={tag.color} />
                <Title>{Trans(tag.title)}</Title>
              </Tag>
            ))}
          <MoreText>...</MoreText>
        </Wrapper>
      </Popover>
    )
  }

  return (
    <Maybe test={data}>
      <FullList data={data} />
    </Maybe>
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
  max: PropTypes.number,
}

InlineTags.defaultProps = {
  data: [],
  max: 3,
}

export default InlineTags
