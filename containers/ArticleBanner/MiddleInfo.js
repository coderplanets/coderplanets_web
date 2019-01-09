import React from 'react'

import JobMiddleInfo from './JobMiddleInfo'
import { THREAD } from '../../utils'

const MiddleInfo = ({ thread, data }) => {
  if (thread === THREAD.JOB) return <JobMiddleInfo data={data} />
  return null
}

export default MiddleInfo
