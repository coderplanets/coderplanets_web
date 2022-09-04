/*
 *
 * InlineCommunities
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@/utils/logger'
import { Trans } from '@/utils/i18n'
import Tooltip from '@/widgets/Tooltip'
import Maybe from '@/widgets/Maybe'

import {
  Wrapper,
  PopoverInfo,
  CommunityWrapper,
  CommunityLogo,
  MoreText,
  Linker,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:InlineCommunities:index')

const FullList = ({ data }) => (
  <Wrapper>
    {data.map((c) => (
      <Tooltip
        key={c.title}
        placement="bottom"
        content={
          <PopoverInfo>
            来自 <Linker href={`/${c.raw}/jobs`}>{c.title}</Linker> 社区
          </PopoverInfo>
        }
      >
        <CommunityWrapper>
          <CommunityLogo src={c.logo} />
        </CommunityWrapper>
      </Tooltip>
    ))}
  </Wrapper>
)

const InlineCommunities = ({ data, show, max }) => {
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
        <Wrapper>
          {data.slice(0, max).map((c) => (
            <CommunityWrapper key={c.title}>
              <CommunityLogo src={c.logo} />
              <div>{Trans(c.title)}</div>
            </CommunityWrapper>
          ))}
          <MoreText>..</MoreText>
        </Wrapper>
      </Tooltip>
    )
  }

  return (
    <Maybe test={data && show}>
      <FullList data={data} />
    </Maybe>
  )
}

InlineCommunities.propTypes = {
  show: T.bool,
  data: T.arrayOf(
    T.shape({
      title: T.string,
      logo: T.string,
      raw: T.string,
    }),
  ),
  max: T.number,
}

InlineCommunities.defaultProps = {
  show: false,
  data: [],
  max: 2,
}

export default React.memo(InlineCommunities)
