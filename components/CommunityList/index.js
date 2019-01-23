/*
 *
 * CommunityList
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'

import { makeDebugger } from 'utils'
import Popover from 'components/Popover'

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
const debug = makeDebugger('c:CommunityList:index')

const CommunityList = ({ items, emptyHint }) => {
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
          <Linker href={`/${community.raw}/posts`}>
            <Logo src={community.logo} />
          </Linker>
        </Popover>
      ))}
    </Wrapper>
  )
}

CommunityList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      raw: PropTypes.string,
      title: PropTypes.string,
      logo: PropTypes.string,
    })
  ),
  emptyHint: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

CommunityList.defaultProps = {
  items: [],
  emptyHint: '',
}

export default CommunityList
