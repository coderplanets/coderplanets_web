/*
 *
 * ImgFallback
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@/utils'

import Work from './Work'
import Avatar from './Avatar'

/* eslint-disable-next-line */
const log = buildLog('c:ImgFallback:index')

const ImgFallback = ({ type, ...restProps }) => {
  switch (type) {
    case 'work': {
      return <Work {...restProps} />
    }

    default:
      return <Avatar {...restProps} />
  }
}

ImgFallback.propTypes = {
  type: T.oneOf(['avatar', 'work']),
}

ImgFallback.defaultProps = {
  type: 'avatar',
}

export default React.memo(ImgFallback)
