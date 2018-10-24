/*
 *
 * JobItem
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

// import { ICON_CMD } from '../../config'

import { Wrapper, ReadedLabel } from './styles'

import JobInfo from './JobInfo'
import CompanyInfo from './CompanyInfo'

import { makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:JobItem:index')
/* eslint-enable no-unused-vars */

const getOpacity = (current, active, viewed) => {
  if (active.id) {
    return current.id !== active.id ? 0.6 : 1
  }
  return viewed ? 0.85 : 1
}

const JobItem = ({ entry, active, onTitleSelect }) => (
  <Wrapper
    opacity={getOpacity(entry, active, entry.viewerHasViewed)}
    onClick={onTitleSelect}
  >
    {entry.viewerHasViewed ? <ReadedLabel>已读</ReadedLabel> : null}
    <JobInfo entry={entry} />
    <CompanyInfo entry={entry} />
  </Wrapper>
)

JobItem.propTypes = {
  active: PropTypes.object,

  entry: PropTypes.shape({
    title: PropTypes.string,
    digest: PropTypes.string,
    views: PropTypes.number,

    author: PropTypes.shape({
      nickname: PropTypes.string,
      avatar: PropTypes.string,
    }),
  }).isRequired,

  onTitleSelect: PropTypes.func,
}

JobItem.defaultProps = {
  onTitleSelect: debug,
  active: {},
}

export default JobItem
