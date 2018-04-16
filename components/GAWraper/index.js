import React from 'react'
import Router from 'next/router'

import * as GA from '../../utils/analytics'

Router.onRouteChangeComplete = url => {
  GA.pageview(url)
}

/* eslint-disable */
export default ({ children }) => <div>{children}</div>
/* eslint-enable */
