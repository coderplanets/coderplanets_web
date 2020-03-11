/*
 *
 * NaviMenu
 *
 */

import React from 'react'
// import T from 'prop-types'

import { buildLog } from '@utils'
// import { ICON_CMD } from '@config'

// import { SpaceGrow } from '@components/BaseStyled'

import { Wrapper } from '../styles/children_filter'

/* eslint-disable-next-line */
const log = buildLog('c:NaviMenu:index')

const ChildrenFilter = () => {
  return (
    <Wrapper>
      <div>filter</div>
    </Wrapper>
  )
}

ChildrenFilter.propTypes = {}

ChildrenFilter.defaultProps = {}

export default React.memo(ChildrenFilter)
