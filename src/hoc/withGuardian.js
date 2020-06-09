//
/*
 *
 * Guardian
 *
 */

import React from 'react'
import T from 'prop-types'
import { startsWith, isEmpty, path, split } from 'ramda'

import { buildLog, BStore, nilOrEmpty } from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('c:Guardian:index')

const getDisplayName = (WrappedComp) =>
  WrappedComp.displayName || WrappedComp.name || 'Component'

const getRawPassport = (passport) => {
  if (startsWith('owner;', passport)) {
    return split('owner;', passport)[1]
  }

  return passport
}

/*
 * auth hoc, the wrappered component just pass the passport props
 * with the format: "xxx->xxx.xxx"
 *
 */

const withGuardian = (WrappedComponent) => {
  class WithGuardian extends React.Component {
    constructor(props) {
      super(props)
      const { passport, ownerId } = this.props
      const loginUser = BStore.get('user') || {}
      const accountPassports = loginUser.cmsPassport || {}
      let isValid = false

      // log('accountPassports: ', accountPassports)
      // log('passport: ', passport)
      // valid by default if no passport pass in
      // or root
      if (nilOrEmpty(passport) || accountPassports.root) {
        isValid = true
      } else if (startsWith('owner', passport)) {
        // check if owner is login user ...
        isValid = loginUser.id === ownerId
      } else {
        const rawPassport = getRawPassport(passport)
        const checkPath = split('->', rawPassport || '')
        isValid = !!path(checkPath, accountPassports)
      }

      this.state = { isValid }
    }

    renderWappedChild() {
      const { isValid } = this.state
      const { fallbackProps } = this.props

      if (isValid) {
        return <WrappedComponent {...this.props} />
      }

      if (!isValid && !isEmpty(fallbackProps) && fallbackProps === 'readOnly') {
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
    passport: T.string,
    // author check
    ownerId: T.string,
    // if fallbackProps provide, then render the WrappedComp along with this props
    fallbackProps: T.oneOf(['readOnly', '']),
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
