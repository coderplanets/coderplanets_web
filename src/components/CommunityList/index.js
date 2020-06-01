/*
 *
 * CommunityList
 *
 */

import React from 'react'
import T from 'prop-types'
import { isEmpty } from 'ramda'

import { buildLog } from '@/utils'
import Tooltip from '@/components/Tooltip'

import {
  Wrapper,
  Linker,
  Logo,
  PopoverInfo,
  PopCommunityLogo,
  PopCommnityInfo,
  PopCommnityTitle,
  PopCommnityDesc,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:CommunityList:index')

const CommunityList = ({ items, size, bottom, emptyHint }) => {
  if (isEmpty(items)) {
    return !isEmpty(emptyHint) && <React.Fragment>{emptyHint}</React.Fragment>
  }

  return (
    <Wrapper>
      {items.map(community => (
        <Tooltip
          key={community.id}
          placement="bottom"
          content={
            <PopoverInfo>
              <PopCommunityLogo src={community.logo} />
              <PopCommnityInfo>
                <PopCommnityTitle>{community.title}</PopCommnityTitle>
                <PopCommnityDesc>{community.desc}</PopCommnityDesc>
              </PopCommnityInfo>
            </PopoverInfo>
          }
        >
          <Linker href={`/${community.raw}/posts`} bottom={bottom}>
            <Logo src={community.logo} size={size} />
          </Linker>
        </Tooltip>
      ))}
    </Wrapper>
  )
}

CommunityList.propTypes = {
  items: T.arrayOf(
    T.shape({
      id: T.string,
      raw: T.string,
      title: T.string,
      logo: T.string,
    })
  ),
  size: T.string,
  bottom: T.string,
  emptyHint: T.oneOfType([T.string, T.node]),
}

CommunityList.defaultProps = {
  items: [],
  emptyHint: '',
  size: '24px',
  bottom: '0',
}

export default React.memo(CommunityList)
