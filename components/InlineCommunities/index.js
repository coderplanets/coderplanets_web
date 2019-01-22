/*
 *
 * InlineCommunities
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { makeDebugger, Trans } from 'utils'
import Popover from 'components/Popover'
import Maybe from 'components/Maybe'

import {
  Wrapper,
  PopoverInfo,
  CommunityWrapper,
  CommunityLogo,
  MoreText,
  Linker,
} from './styles'

/* eslint-disable-next-line */
const debug = makeDebugger('c:InlineCommunities:index')

const FullList = ({ data }) => (
  <Wrapper>
    {data.map(c => (
      <Popover
        key={c.title}
        placement="bottom"
        trigger="hover"
        content={
          <PopoverInfo>
            来自 <Linker href={`/${c.raw}/jobs`}>{c.title}</Linker> 社区
          </PopoverInfo>
        }
      >
        <CommunityWrapper>
          <CommunityLogo src={c.logo} />
        </CommunityWrapper>
      </Popover>
    ))}
  </Wrapper>
)

const InlineCommunities = ({ data, show, max }) => {
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
          {data.slice(0, max).map(c => (
            <CommunityWrapper key={c.title}>
              <CommunityLogo src={c.logo} />
              <div>{Trans(c.title)}</div>
            </CommunityWrapper>
          ))}
          <MoreText>..</MoreText>
        </Wrapper>
      </Popover>
    )
  }

  return (
    <Maybe test={data && show}>
      <FullList data={data} />
    </Maybe>
  )
}

InlineCommunities.propTypes = {
  show: PropTypes.bool,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      logo: PropTypes.string,
      raw: PropTypes.string,
    })
  ),
  max: PropTypes.number,
}

InlineCommunities.defaultProps = {
  show: false,
  data: [],
  max: 2,
}

export default React.memo(InlineCommunities)
