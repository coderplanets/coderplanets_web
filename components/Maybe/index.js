/*
 *
 * Maybe
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'

import { makeDebugger } from 'utils'
/* eslint-disable-next-line */
const debug = makeDebugger('c:Maybe:index')

const MaybeLoading = ({ loading }) => {
  if (R.isEmpty(loading)) return <div />
  return <div>{loading}</div>
}

const Maybe = ({ children, test, loading }) => {
  if (Array.isArray(test) && R.isEmpty(test)) {
    return <MaybeLoading loading={loading} />
  }

  if (test === null) return <div />
  if (test === false) return <MaybeLoading loading={loading} />

  return <React.Fragment>{children}</React.Fragment>
}

Maybe.propTypes = {
  // https://www.npmjs.com/package/prop-types
  children: PropTypes.node.isRequired,
  test: PropTypes.any,
  loading: PropTypes.node,
}

Maybe.defaultProps = {
  test: '',
  loading: null,
}

export default Maybe
