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

const getDisplayName = WrappedComp =>
  WrappedComp.displayName || WrappedComp.name || 'Component'

const getRawPassport = passport => {
  if (R.startsWith('owner;', passport)) {
    return R.split('owner;', passport)[1]
  }

  return passport
}

/*
 * auth hoc, the wrappered component just pass the passport props
 * with the format: "xxx->xxx.xxx"
 *
 * by default this HOC takes to 2 args
   1. passport(string): general check
   2. ownerId(string): author check
 *
 */

const withGuardian = WrappedComponent => {
  class WithGuardian extends React.Component {
    constructor(props) {
      super(props)
      const { passport, ownerId } = this.props
      const loginUser = BStore.get('user') || {}
      const accountPassports = loginUser.cmsPassport || {}
      let isValid = false

      debug('accountPassports: ', accountPassports)
      debug('passport: ', passport)
      // valid by default if no passport pass in
      // or root
      if (!passport || accountPassports.root) {
        // if (!passport) {
        isValid = true
      } else if (R.startsWith('owner', passport)) {
        // check if owner is login user ...
        isValid = loginUser.id === ownerId
      } else {
        const rawPassport = getRawPassport(passport)
        const checkPath = R.split('->', rawPassport || '')
        isValid = !!R.path(checkPath, accountPassports)
      }

      this.state = { isValid }
    }

    render() {
      const { isValid } = this.state

      return (
        <React.Fragment>
          {isValid && <WrappedComponent {...this.props} />}
        </React.Fragment>
      )
    }
  }

  WithGuardian.displayName = `WithGuardian(${getDisplayName(WrappedComponent)})`
  return WithGuardian
}

export default withGuardian
