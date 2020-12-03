/*
 *
 * NaviMenu
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@/utils'

// import { SpaceGrow } from '@/components/Common'
import { Wrapper, Title } from '../styles/children_menu/dashboard'

/* eslint-disable-next-line */
const log = buildLog('c:NaviMenu:index')

const Dashboard = ({ joinMode, parentMenuItem }) => {
  return (
    <Wrapper joinMode={joinMode}>
      <Title joinMode={joinMode}>{parentMenuItem.title}</Title>
    </Wrapper>
  )
}

Dashboard.propTypes = {
  parentMenuItem: T.any.isRequired, // TODO
  joinMode: T.bool.isRequired,
}

Dashboard.defaultProps = {}

export default React.memo(Dashboard)
