//
/*
 *
 * Guardian
 *
 */

import React from 'react'
import R from 'ramda'

import { makeDebugger, BStore } from 'utils'

/* eslint-disable-next-line */
const debug = makeDebugger('c:Guardian:index')

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

/*
 * auth hoc, the wrappered component just pass the passport props
 * with the format: "xxx->xxx.xxx"
 *
*/
export const withGuardian = WrappedComponent => {
  class WithGuardian extends React.Component {
    constructor(props) {
      super(props)
      const { passport } = this.props
      const accountPassports = BStore.get('passports')
      let isValid = false

      if (!passport) {
        isValid = true
      } else {
        const checkPath = R.split('->', passport || '')
        isValid = !!R.path(checkPath, accountPassports)
      }

      this.state = { isValid }
    }

    render() {
      const { isValid } = this.state

      return (
        <React.Fragment>
          {isValid ? <WrappedComponent {...this.props} /> : null}
        </React.Fragment>
      )
    }
  }

  WithGuardian.displayName = `WithGuardian(${getDisplayName(WrappedComponent)})`
  return WithGuardian
}

export const otherHoc = 1
