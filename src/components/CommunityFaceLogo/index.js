/*
 *
 * CommunityFaceLogo
 *
 */

import React from 'react'
import T from 'prop-types'
import { isEmpty } from 'ramda'

import { HCN } from '@/constant'
import { ICON_BASE } from '@/config'
import { buildLog } from '@/utils'

import { Logo } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:CommunityFaceLogo:index')

const CommunityFaceLogo = ({ noFill, src, raw, loading, className }) => {
  if (raw === HCN || isEmpty(src)) {
    return (
      <Logo
        // src={`${ICON_BASE}/site_logo.svg`}
        src="https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/static/new-logo.jpg"
        raw={raw}
        className={className}
      />
    )
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
  noFill: T.bool,
  src: T.string,
  raw: T.string,
  // just for clean styled-component warnings
  className: T.string,
  loading: T.any,
}

CommunityFaceLogo.defaultProps = {
  src: '',
  raw: HCN,
  noFill: false,
  className: 'community-facelogo-class',
  loading: null,
}

export default React.memo(CommunityFaceLogo)
