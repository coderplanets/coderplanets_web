import React from 'react'

import { NumberTitle } from './styles'

const SubscribedTitle = ({ viewerHasSubscribed }) => (
  <React.Fragment>
    {viewerHasSubscribed ? (
      <NumberTitle>已加入</NumberTitle>
    ) : (
      <NumberTitle>加入</NumberTitle>
    )}
  </React.Fragment>
)

export default React.memo(SubscribedTitle)
