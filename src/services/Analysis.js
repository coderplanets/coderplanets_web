import React from 'react'
import Router from 'next/router'

import { GA } from '@/utils'

Router.onRouteChangeComplete = (url) => {
  GA.pageview(url)
}

const Analysis = ({ children }) => <div>{children}</div>

export default Analysis
