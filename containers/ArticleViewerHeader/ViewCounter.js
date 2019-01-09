import React from 'react'
import PropTypes from 'prop-types'

import {
  Reaction,
  PlainAction,
  ReactionName,
  PlainUserNum,
} from './styles/reaction'

const ViewCounter = ({ data }) => (
  <Reaction>
    <PlainAction>
      <ReactionName>浏览:</ReactionName>
    </PlainAction>
    <PlainUserNum>{data.views}</PlainUserNum>
  </Reaction>
)

ViewCounter.propTypes = {
  data: PropTypes.shape({
    views: PropTypes.number,
  }).isRequired,
}

ViewCounter.defaultProps = {}

export default ViewCounter
