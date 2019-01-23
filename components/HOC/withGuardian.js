//
/*
 *
 * Guardian
 *
 */

import React from 'react'
import R from 'ramda'
import PropTypes from 'prop-types'

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
      // if (nilOrEmpty(passport) || accountPassports.root) {
      if (!passport) {
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

    renderWappedChild() {
      const { isValid } = this.state
      const { fallbackProps } = this.props

      if (isValid) {
        return <WrappedComponent {...this.props} />
      }

      if (
        !isValid &&
        !R.isEmpty(fallbackProps) &&
        fallbackProps === 'readOnly'
      ) {
        return <WrappedComponent {...this.props} readOnly />
      }

      return null
    }

    render() {
      return <React.Fragment>{this.renderWappedChild()}</React.Fragment>
    }
  }

  WithGuardian.propTypes = {
    // general check
    // passport format should be: "community.thread.action"
    // example: 'javascript.post.pin'
    passport: PropTypes.string,
    // author check
    ownerId: PropTypes.string,
    // if fallbackProps provide, then render the WrappedComp along with this props
    fallbackProps: PropTypes.oneOf(['readOnly']),
  }

  WithGuardian.defaultProps = {
    passport: '',
    ownerId: '',
    fallbackProps: '',
  }

  WithGuardian.displayName = `WithGuardian(${getDisplayName(WrappedComponent)})`
  return WithGuardian
}

export default withGuardian
