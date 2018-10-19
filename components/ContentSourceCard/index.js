/*
 *
 * ContentSourceCard
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import CommunityList from '../CommunityList'

import { Wrapper, Title, Desc, NomoreDesc } from './styles'

import TagList from './TagList'

import { makeDebugger } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:ContentSourceCard:index')
/* eslint-enable no-unused-vars */

const ContentSourceCard = ({ data }) => (
  <Wrapper>
    <Title>所属社区</Title>
    <Desc>
      <CommunityList
        items={data.communities}
        emptyHint={<NomoreDesc>不属于任何社区</NomoreDesc>}
      />
    </Desc>
    <Title>标签</Title>

    <Desc column noBottom>
      <TagList items={data.tags} />
    </Desc>
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
  },
}

export default ContentSourceCard
