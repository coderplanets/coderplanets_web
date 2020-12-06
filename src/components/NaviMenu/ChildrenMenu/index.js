/*
 *
 * NaviMenu
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@/utils'

import Dashboard from './Dashboard'
import Catalog from './Catalog'
// import ChildrenItems from './ChildrenItems'

import { Wrapper } from '../styles/children_menu'

/* eslint-disable-next-line */
const log = buildLog('c:NaviMenu:index')

const ChildrenMenu = ({ parentMenuItem, goBack, ...restProps }) => {
  return (
    <Wrapper>
      <Dashboard parentMenuItem={parentMenuItem} goBack={goBack} />
      <Catalog {...restProps} />
    </Wrapper>
  )
}

ChildrenMenu.propTypes = {
  goBack: T.func.isRequired,
  childMenuId: T.string.isRequired,
  expandChildId: T.string.isRequired,
  onExpand: T.func.isRequired,
  onSelect: T.func.isRequired,
  menuItems: T.arrayOf(T.any).isRequired,
  parentMenuItem: T.any.isRequired, // TODO
}

ChildrenMenu.defaultProps = {}

export default React.memo(ChildrenMenu)
