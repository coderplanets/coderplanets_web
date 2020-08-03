import React from 'react'

import JobInfo from './JobInfo'
import CompanyInfo from './CompanyInfo'

const DigestView = ({ entry, community, onPreview, onAuthorSelect }) => (
  <>
    <JobInfo
      entry={entry}
      onPreview={onPreview}
      onAuthorSelect={onAuthorSelect}
      community={community}
    />
    <CompanyInfo entry={entry} onPreview={onPreview} />
  </>
)

export default React.memo(DigestView)
