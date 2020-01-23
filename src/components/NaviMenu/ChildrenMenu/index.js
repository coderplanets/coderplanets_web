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

const Content = ({ view }) => {
  switch (view) {
    case 'filter': {
      return <ChildrenFilter />
    }
    case 'more': {
      return <MoreOptions />
    }
    default: {
      return <Catalog />
    }
  }
}

/* <ActiveDot /> */
const ChildrenMenu = ({ goBack }) => {
  const [dashView, setDashView] = useState('catalog')

  return (
    <Wrapper>
      <GoBack goBack={goBack} />
      <Dashboard view={dashView} setView={setDashView} />
      <Content view={dashView} />
    </Wrapper>
  )
}

ChildrenMenu.propTypes = {
  goBack: T.func.isRequired,
}

ChildrenMenu.defaultProps = {}

export default React.memo(ChildrenMenu)
