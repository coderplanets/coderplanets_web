/*
 *
 * DesktopView
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@/utils'

import UserList from './UserList'
import { Wrapper, Title, Desc } from './styles/desktop_view'

/* eslint-disable-next-line */
const log = buildLog('c:DesktopView:index')

const DesktopView = ({ data: { pagedCommentsParticipators: users } }) => {
  return (
    <Wrapper>
      {users.totalCount !== 0 && (
        <>
          <Title>参与讨论 ({users.totalCount})</Title>
          <Desc noBottom>
            <UserList items={users.entries} />
          </Desc>
        </>
      )}
    </Wrapper>
  )
}

DesktopView.propTypes = {
  data: T.shape({
    communities: T.arrayOf(
      T.shape({
        id: T.string,
        title: T.string,
        logo: T.string,
        raw: T.string,
      }),
    ),
    pagedCommentsParticipators: T.shape({
      entries: T.array,
      totalCount: T.number,
    }),
    tags: T.arrayOf(
      T.shape({
        id: T.string,
        title: T.string,
        color: T.string,
        raw: T.string,
      }),
    ),
  }),
}

DesktopView.defaultProps = {
  data: {
    communities: [],
    tags: [],
    pagedCommentsParticipators: {
      entries: [],
      totalCount: 0,
    },
  },
}

export default React.memo(DesktopView)
