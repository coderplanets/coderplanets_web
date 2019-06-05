/*
 *
 * Maybe
 *
 */

import React from 'react'
import T from 'prop-types'
import R from 'ramda'

import { buildLog } from '@utils'
/* eslint-disable-next-line */
const log = buildLog('c:Maybe:index')

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
  children: T.node.isRequired,
  test: T.any,
  loading: T.node,
}

Maybe.defaultProps = {
  test: '',
  loading: null,
}

export default Maybe
