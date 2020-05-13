/*
 *
 * InlineTags
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog, sortByColor, Trans } from '@/utils'
import Maybe from '@/components/Maybe'
import Tooltip from '@/components/Tooltip'

import { Wrapper, Tag, Dot, Title, MoreText, PopoverInfo } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:InlineTags:index')

const FullList = ({ data, marginLeft }) => (
  <Wrapper marginLeft={marginLeft}>
    {sortByColor(data).map(tag => (
      <Tag key={tag.title}>
        <Dot color={tag.color} />
        <Title>{Trans(tag.title)}</Title>
      </Tag>
    ))}
  </Wrapper>
)

const InlineTags = ({ data, max, marginLeft }) => {
  if (data.length > max) {
    return (
      <Tooltip
        placement="bottom"
        content={
          <PopoverInfo>
            <FullList data={data} />
          </PopoverInfo>
        }
      >
        <Wrapper marginLeft={marginLeft}>
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
      </Tooltip>
    )
  }

  return (
    <Maybe test={data}>
      <FullList data={data} marginLeft={marginLeft} />
    </Maybe>
  )
}

InlineTags.propTypes = {
  data: T.arrayOf(
    T.shape({
      title: T.string,
      color: T.string,
    })
  ),
  max: T.number,
  marginLeft: T.bool,
}

InlineTags.defaultProps = {
  data: [],
  max: 3,
  marginLeft: true,
}

export default React.memo(InlineTags)
