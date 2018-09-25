/*
 *
 * JobItem
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

// import { ICON_CMD } from '../../config'

import { Wrapper } from './styles'

import JobInfo from './JobInfo'
import CompanyInfo from './CompanyInfo'

import { makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:JobItem:index')
/* eslint-enable no-unused-vars */

const JobItem = ({ entry, active, onTitleSelect }) => (
  <Wrapper current={entry} active={active} onClick={onTitleSelect}>
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
