/*
 *
 * NaviMenu
 *
 */

import React, { useState } from 'react'
import T from 'prop-types'

import { buildLog } from '@utils'

import GoBack from './GoBack'
import Dashboard from './Dashboard'
import Catalog from './Catalog'
import ChildrenFilter from '../ChildrenFilter'
import MoreOptions from '../MoreOptions'
// import ChildrenItems from './ChildrenItems'

import { Wrapper } from '../styles/children_menu'

/* eslint-disable-next-line */
const log = buildLog('c:NaviMenu:index')

const Content = ({ view, menuItems, childMenuId, onSelect }) => {
  switch (view) {
    case 'filter': {
      return <ChildrenFilter />
    }
    case 'more': {
      return <MoreOptions />
    }
    default: {
      return (
        <Catalog
          childMenuId={childMenuId}
          menuItems={menuItems}
          onSelect={onSelect}
        />
      )
    }
  }
}

const ChildrenMenu = ({
  childMenuId,
  menuItems,
  parentMenuItem,
  onSelect,
  goBack,
}) => {
  const [dashView, setDashView] = useState('catalog')

  return (
    <Wrapper>
      <GoBack goBack={goBack} />
      <Dashboard
        view={dashView}
        setView={setDashView}
        parentMenuItem={parentMenuItem}
      />
      <Content
        view={dashView}
        childMenuId={childMenuId}
        menuItems={menuItems}
        onSelect={onSelect}
      />
    </Wrapper>
  )
}

ChildrenMenu.propTypes = {
  childMenuId: T.string.isRequired,
  onSelect: T.func.isRequired,
  goBack: T.func.isRequired,
  menuItems: T.arrayOf(T.any).isRequired,
  parentMenuItem: T.any.isRequired, // TODO
}

ChildrenMenu.defaultProps = {}

export default React.memo(ChildrenMenu)
