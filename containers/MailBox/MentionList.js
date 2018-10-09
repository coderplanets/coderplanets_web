import React from 'react'
import R from 'ramda'

import { EmptyLabel } from '../../components'

const MentionList = ({ data }) => {
  if (R.isEmpty(data)) return <EmptyLabel text="还没有人提到(@)你" />

  return <h3>MentionList</h3>
}

export default MentionList
