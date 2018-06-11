/*
*
* JobsThread
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'

// import Link from 'next/link'

import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:JobsThread')
/* eslint-enable no-unused-vars */

class JobsThreadContainer extends React.Component {
  componentWillMount() {
    logic.init(this.props.jobsThread)
  }

  render() {
    return (
      <div>
        <h2>job</h2>
        JobsThread container!
      </div>
    )
  }
}

export default inject(storePlug('jobsThread'))(observer(JobsThreadContainer))
