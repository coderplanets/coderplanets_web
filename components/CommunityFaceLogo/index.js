/*
 *
 * CommunityFaceLogo
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'

import { buildLog } from '@utils'
import HomeLogo from './HomeLogo'

import { Logo } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:CommunityFaceLogo:index')

const CommunityFaceLogo = ({ noFill, src, raw, loading, className }) => {
  if (raw === 'home' || R.isEmpty(src)) {
    return <HomeLogo className={className} />
  }

  return (
    <Logo
      noFill={noFill}
      src={src}
      raw={raw}
      loading={loading}
      className={className}
    />
  )
}

CommunityFaceLogo.propTypes = {
  noFill: PropTypes.bool,
  src: PropTypes.string,
  raw: PropTypes.string,
  // just for clean styled-component warnings
  className: PropTypes.string,
  loading: PropTypes.any,
}

CommunityFaceLogo.defaultProps = {
  src: '',
  raw: 'home',
  noFill: false,
  className: 'community-facelogo-class',
  loading: null,
}

export default React.memo(CommunityFaceLogo)
