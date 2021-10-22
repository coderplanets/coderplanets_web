/*
 *
 * CommunityList
 *
 */

import React from 'react'
import T from 'prop-types'
import { isEmpty } from 'ramda'

import { ICON } from '@/config'
import { buildLog } from '@/utils/logger'
import Tooltip from '@/widgets/Tooltip'

import {
  Wrapper,
  Linker,
  Logo,
  PopoverInfo,
  PopCommunityLogo,
  PopCommunityInfo,
  PopCommunityTitle,
  PopCommunityDesc,
  MoreWrapper,
  MoreIcon,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:CommunityList:index')

const CommunityList = ({
  items,
  size,
  bottom,
  emptyHint,
  right,
  totalCount,
  onMoreClick,
}) => {
  if (isEmpty(items)) {
    return !isEmpty(emptyHint) && <>{emptyHint}</>
  }

  return (
    <Wrapper>
      {items.map((community) => (
        <Tooltip
          key={community.id}
          placement="bottom"
          content={
            <PopoverInfo>
              <PopCommunityLogo src={community.logo} />
              <PopCommunityInfo>
                <PopCommunityTitle>{community.title}</PopCommunityTitle>
                <PopCommunityDesc>{community.desc}</PopCommunityDesc>
              </PopCommunityInfo>
            </PopoverInfo>
          }
        >
          <Linker
            href={`/${community.raw}/posts`}
            bottom={bottom}
            right={right}
          >
            <Logo src={community.logo} size={size} />
          </Linker>
        </Tooltip>
      ))}

      {totalCount > items.length && (
        <MoreWrapper bottom={bottom} right={right} onClick={onMoreClick}>
          <div>{totalCount}</div>{' '}
          <MoreIcon src={`${ICON}/shape/arrow-simple.svg`} />
        </MoreWrapper>
      )}
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
    }),
  ),
  size: T.number,
  bottom: T.number,
  right: T.number,
  emptyHint: T.oneOfType([T.string, T.node]),
  totalCount: T.number,
  onMoreClick: T.func,
}

CommunityList.defaultProps = {
  items: [],
  emptyHint: '',
  size: 24,
  bottom: 0,
  right: 5,
  totalCount: -1,
  onMoreClick: log,
}

export default React.memo(CommunityList)
