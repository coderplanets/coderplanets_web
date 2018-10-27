/*
 *
 * Navigator
 *
 */

import React from 'react'
// import PropTypes from 'prop-types'

import DigestView from './DigestView'
import SimpleView from './SimpleView'

import { makeDebugger } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:Navigator:index')
/* eslint-enable no-unused-vars */

const Navigator = ({ curCommunity }) => {
  debug('get curCommunity: ', curCommunity)

  const layout = '2DIGEST'
  return (
    <React.Fragment>
      {layout === 'DIGEST' ? (
        <DigestView />
      ) : (
        <SimpleView curCommunity={curCommunity} />
      )}
    </React.Fragment>
  )
}

/*
   Navigator.propTypes = {
   // https://www.npmjs.com/package/prop-types
   }

   Navigator.defaultProps = {}
 */

export default Navigator
