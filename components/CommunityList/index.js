/*
 *
 * CommunityList
 *
 */

import React from 'react'
import T from 'prop-types'
import R from 'ramda'

import { buildLog } from '@utils'
import Popover from '@components/Popover'

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
  if (R.isEmpty(items)) {
    return !R.isEmpty(emptyHint) && <React.Fragment>{emptyHint}</React.Fragment>
  }

  return (
    <Wrapper>
      {items.map(community => (
        <Popover
          key={community.id}
          placement="bottom"
          trigger="hover"
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
        </Popover>
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

export default CommunityList
