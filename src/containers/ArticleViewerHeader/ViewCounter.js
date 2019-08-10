import React from 'react'
import T from 'prop-types'

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
  data: T.shape({
    views: T.number,
  }).isRequired,
}

ViewCounter.defaultProps = {}

export default ViewCounter
