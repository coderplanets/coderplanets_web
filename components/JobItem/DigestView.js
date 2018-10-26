import React from 'react'

import JobInfo from './JobInfo'
import CompanyInfo from './CompanyInfo'

const DigestView = ({ entry }) => (
  <React.Fragment>
    <JobInfo entry={entry} />
    <CompanyInfo entry={entry} />
  </React.Fragment>
)

export default DigestView
