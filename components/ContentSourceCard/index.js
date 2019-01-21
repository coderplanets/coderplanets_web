/*
 *
 * ContentSourceCard
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { makeDebugger } from 'utils'
import CommunityList from '../CommunityList'

import { Wrapper, Didiver, Title, Desc, NomoreDesc } from './styles'

import UserList from './UserList'
// import TagList from './TagList'

/* eslint-disable-next-line */
const debug = makeDebugger('c:ContentSourceCard:index')

const ContentSourceCard = ({
  data: { communities, pagedCommentsParticipators: users },
}) => (
  <Wrapper>
    <Title>所属社区</Title>
    <Desc>
      <CommunityList
        items={communities}
        emptyHint={<NomoreDesc>不属于任何社区</NomoreDesc>}
      />
    </Desc>

    {users.totalCount !== 0 ? (
      <React.Fragment>
        <Didiver />
        <Title>参与讨论 ({users.totalCount})</Title>
        <Desc noBottom>
          <UserList items={users.entries} />
        </Desc>
      </React.Fragment>
    ) : null}

    {/*
        <Desc column noBottom>
        <TagList items={data.tags} />
        </Desc>
      */}
  </Wrapper>
)

ContentSourceCard.propTypes = {
  data: PropTypes.shape({
    communities: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        logo: PropTypes.string,
        raw: PropTypes.string,
      })
    ),
    pagedCommentsParticipators: PropTypes.shape({
      entries: PropTypes.array,
      totalCount: PropTypes.number,
    }),
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        color: PropTypes.string,
        raw: PropTypes.string,
      })
    ),
  }),
}

ContentSourceCard.defaultProps = {
  data: {
    communities: [],
    tags: [],
    pagedCommentsParticipators: {
      entries: [],
      totalCount: 0,
    },
  },
}

export default ContentSourceCard
